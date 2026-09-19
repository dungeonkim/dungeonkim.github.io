# dungeonkim's retro goods.

김동건의 공개 게임 소개 페이지. 추가 패키지 없이 Node.js와 HTML/CSS만 사용합니다.

- `config.jsonc`: 제목, 소개, 공개 게임 목록. 주석과 마지막 쉼표를 지원합니다.
- `assets/`: 소개 페이지 스타일, 아이콘, 직접 촬영한 게임 스크린샷.
- `games/<ID>/`: ffstation에서 publish한 웹 배포본.
- `docs/`: 관리 문서와 사이트 생성·검증 도구. 웹사이트에는 배포하지 않습니다.
- `index.html`: 사이트 템플릿. `_site/`가 실제 웹 배포 결과입니다.

## 게임 공개 및 업데이트

1. `C:\Projects\ffstation`에서 `./ff.cmd publish PALO2`를 실행합니다.
2. 생성된 `dist/PALO2/web/` 내용으로 이 저장소의 `games/PALO2/`를 교체합니다.
3. 실제 웹 배포본의 플레이 화면을 촬영하여 `assets/PALO2.png`에 저장합니다.
4. `config.jsonc`의 `games.PALO2`에 `enabled`, `title_kr`, `main_image`, `desc_kr`를 작성합니다.
5. 아래 검증 후 커밋하고 `master`에 푸시합니다. GitHub Actions가 사이트를 배포합니다.

```powershell
node docs/build.test.mjs
node docs/build.mjs
python -m http.server 8766 --bind 127.0.0.1 --directory _site
```

미리보기: http://127.0.0.1:8766/

`enabled: false`는 다음 배포에서 소개, 게임 파일, 해당 스크린샷을 모두 제외합니다.
활성화된 게임의 배포본이나 스크린샷이 없으면 배포를 중단합니다.
게임 ID는 ffstation 폴더명과 대소문자까지 일치해야 합니다.
스크린샷 경로는 `/assets/파일명.png`(또는 jpg/jpeg/webp) 형식입니다.
게임에는 `title_kr`를 생략할 수 있으며, 그때는 ID를 제목으로 씁니다.

## 스크린샷

`PALO2.png`는 ffstation의 웹 배포본에서 직접 촬영한 실제 플레이 화면입니다.
게임 화면을 재생성하거나 그림으로 대체하지 않습니다.
기본 조작: 1P 커서키 / Space 발사 / 왼쪽 Ctrl 파워업,
2P WASD / Z 발사 / X 파워업. 게임의 SETTINGS에서 바꿀 수 있습니다.

## 배포 범위

GitHub Pages는 `_site/`만 배포합니다. 문서, 지시문, 테스트, 설정 파일은
사이트에서 제공하지 않습니다. 공개 Git 저장소에 커밋한 관리 문서는
GitHub 소스 화면에서는 보이므로, 비밀 정보는 커밋하지 않습니다.
`docs/directives/`는 Git에서도 제외합니다.

저장소 Settings → Pages → Source는 `GitHub Actions`로 설정합니다.
`Deploy from a branch`는 사이트 생성 단계를 건너뛰므로 사용하지 않습니다.
