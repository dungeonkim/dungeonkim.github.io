import assert from 'node:assert/strict';
import { cpSync, existsSync, mkdtempSync, mkdirSync, readFileSync, rmSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { resolve } from 'node:path';
import { build, parseConfig } from './build.mjs';

assert.deepEqual(parseConfig('\uFEFF{/* comment */"url":"https://example.com/a//b",\n// line\n"text":"quote: \\" and /*text*/", "list":[1,],}'),
  { url: 'https://example.com/a//b', text: 'quote: " and /*text*/', list: [1] });
assert.throws(() => parseConfig('{"value":1 /* gap */ 2}'));
const root = mkdtempSync(resolve(tmpdir(), 'retro-goods-test-'));
try {
  cpSync(resolve(import.meta.dirname, '../index.html'), resolve(root, 'index.html'));
  mkdirSync(resolve(root, 'assets'));
  for (const file of ['site.css', 'favicon.svg', 'demo.png', 'hidden.png']) writeFileSync(resolve(root, 'assets', file), 'test');
  for (const id of ['DEMO', 'HIDDEN']) {
    mkdirSync(resolve(root, 'games', id), { recursive: true });
    writeFileSync(resolve(root, 'games', id, 'index.html'), id);
  }
  mkdirSync(resolve(root, 'docs'));
  writeFileSync(resolve(root, 'docs', 'private.md'), 'not for the website');
  const config = { main: { title_kr: '<Archive>', desc_kr: '"safe" & sound' }, games: {
    DEMO: { enabled: true, title_kr: '<Game>', main_image: '/assets/demo.png', desc_kr: '<script>bad()</script>' },
    HIDDEN: { enabled: false, main_image: '/assets/hidden.png' },
  } };
  const save = () => writeFileSync(resolve(root, 'config.jsonc'), JSON.stringify(config));
  save();
  assert.deepEqual(build(root), ['DEMO']);
  const html = readFileSync(resolve(root, '_site/index.html'), 'utf8');
  assert.ok(html.includes('&lt;Game&gt;') && !html.includes('<script>'));
  assert.ok(html.includes('href="/games/DEMO/"'));
  assert.ok(existsSync(resolve(root, '_site/games/DEMO/index.html')));
  for (const path of ['docs', 'config.jsonc', 'games/HIDDEN', 'assets/hidden.png']) assert.ok(!existsSync(resolve(root, '_site', path)), path);
  config.games.DEMO.enabled = false;
  save();
  assert.deepEqual(build(root), []);
  assert.ok(!existsSync(resolve(root, '_site/games/DEMO')));
  assert.ok(readFileSync(resolve(root, '_site/index.html'), 'utf8').includes('새로운 게임을 준비'));
  config.games.DEMO.enabled = true;
  config.games.DEMO.main_image = '/assets/../docs/private.md';
  save();
  assert.throws(() => build(root), /경로/);
  config.games.DEMO.main_image = '/assets/missing.png';
  save();
  assert.throws(() => build(root), /파일이 없습니다/);
  assert.ok(existsSync(resolve(root, '_site/index.html')), 'invalid config preserves the previous output');
  console.log('PASS: JSONC, HTML escaping, publication allowlist, unpublishing, missing files and path validation');
} finally { rmSync(root, { recursive: true, force: true }); }
