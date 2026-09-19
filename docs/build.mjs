import { cpSync, existsSync, mkdirSync, readFileSync, rmSync, writeFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

export function parseConfig(text) {
  // Keep quoted strings intact, including URLs and escaped quotes.
  const strings = /"(?:\\.|[^"\\])*"|\/\/[^\r\n]*|\/\*[\s\S]*?\*\//g;
  const clean = text.replace(/^\uFEFF/, '').replace(strings, token => token.startsWith('"') ? token : ' ');
  return JSON.parse(clean.replace(/"(?:\\.|[^"\\])*"|,\s*(?=[}\]])/g, token => token.startsWith('"') ? token : ''));
}

const escapeHtml = value => String(value).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]);
const root = resolve(import.meta.dirname, '..');

export function build(siteRoot = root) {
  const config = parseConfig(readFileSync(resolve(siteRoot, 'config.jsonc'), 'utf8'));
  if (typeof config.main?.title_kr !== 'string' || typeof config.main?.desc_kr !== 'string'
      || !config.games || Array.isArray(config.games) || typeof config.games !== 'object') {
    throw new Error('config.jsonc: main.title_kr, main.desc_kr, games를 확인하세요.');
  }
  const games = Object.entries(config.games).filter(([, game]) => game.enabled === true);
  for (const [id, game] of games) {
    if (!/^[A-Za-z0-9_-]+$/.test(id) || typeof game.desc_kr !== 'string'
        || !/^\/assets\/[A-Za-z0-9_-]+\.(png|webp|jpe?g)$/.test(game.main_image)) {
      throw new Error(`게임 설정 또는 이미지 경로가 올바르지 않습니다: ${id}`);
    }
    for (const file of [`games/${id}/index.html`, game.main_image.slice(1)]) {
      if (!existsSync(resolve(siteRoot, file))) throw new Error(`공개할 파일이 없습니다: ${file}`);
    }
  }
  const output = resolve(siteRoot, '_site');
  // Only this generated directory is replaced; source games and docs stay intact.
  rmSync(output, { recursive: true, force: true });
  mkdirSync(resolve(output, 'assets'), { recursive: true });
  for (const file of ['site.css', 'favicon.svg']) cpSync(resolve(siteRoot, 'assets', file), resolve(output, 'assets', file));
  const cards = games.map(([id, game], index) => {
    cpSync(resolve(siteRoot, 'games', id), resolve(output, 'games', id), { recursive: true });
    cpSync(resolve(siteRoot, game.main_image.slice(1)), resolve(output, game.main_image.slice(1)));
    const title = escapeHtml(game.title_kr ?? id);
    return `<article class="game" aria-labelledby="game-${id}">
          <figure>
            <a class="screen" href="/games/${id}/" aria-label="${title} 플레이">
              <img src="${game.main_image}" alt="${title} 실제 플레이 화면" ${index ? 'loading="lazy"' : 'fetchpriority="high"'}>
            </a>
            <figcaption><span>${id} · 실제 플레이 화면</span><span>PLAY IN YOUR BROWSER ↗</span></figcaption>
          </figure>
          <div class="game-info">
            <p class="eyebrow game-id">${String(index + 1).padStart(2, '0')} / ${id}</p>
            <h3 id="game-${id}">${title}</h3>
            <p class="description">${escapeHtml(game.desc_kr)}</p>
            <a class="play" href="/games/${id}/" aria-label="${title} 게임 시작">게임 시작 <span aria-hidden="true">↗</span></a>
            <p class="play-note">설치 없이 브라우저에서 바로 플레이하세요.</p>
          </div>
        </article>`;
  }).join('\n');
  const values = { title: escapeHtml(config.main.title_kr), description: escapeHtml(config.main.desc_kr),
    count: String(games.length).padStart(2, '0'), games: cards || '<p class="empty">새로운 게임을 준비하고 있습니다.</p>' };
  const html = readFileSync(resolve(siteRoot, 'index.html'), 'utf8').replace(/\{\{(title|description|count|games)\}\}/g, (_, key) => values[key]);
  writeFileSync(resolve(output, 'index.html'), html);
  writeFileSync(resolve(output, '.nojekyll'), '');
  return games.map(([id]) => id);
}

if (process.argv[1] && resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  console.log(`공개 사이트 생성: ${build().join(', ') || '(공개 게임 없음)'} → _site/`);
}
