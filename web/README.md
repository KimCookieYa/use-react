# use-react 문서 웹사이트

이 프로젝트는 [Docusaurus](https://docusaurus.io/)를 사용하여 구현된 React 커스텀 훅 라이브러리의 문서 웹사이트입니다.

## 설치

```bash
cd web
npm install
```

## 로컬 개발

```bash
npm start
```

이 명령은 로컬 개발 서버를 실행하고 브라우저 창을 엽니다. 대부분의 변경 사항은 실시간으로 반영됩니다.

## 빌드

```bash
npm run build
```

이 명령은 `build` 디렉토리에 정적 콘텐츠를 생성합니다.

## GitHub Pages 배포

### 수동 배포 방법

1. 프로젝트 빌드하기:
   ```bash
   cd web
   npm run build
   ```

2. GitHub Pages 브랜치 생성하고 배포하기:
   ```bash
   USE_SSH=true npm run deploy
   ```
   또는 HTTPS를 사용할 경우:
   ```bash
   GIT_USER=<GitHub 사용자명> npm run deploy
   ```

### GitHub Actions를 사용한 자동 배포 설정

1. `.github/workflows` 디렉토리를 생성합니다.
2. 해당 디렉토리에 `deploy.yml` 파일을 생성하고 다음 내용을 추가합니다:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]
  pull_request:
    branches: [main]

permissions:
  contents: write

jobs:
  deploy:
    name: Deploy to GitHub Pages
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 18
          cache: npm
          cache-dependency-path: web/package-lock.json

      - name: Install dependencies
        run: cd web && npm ci
      - name: Build website
        run: cd web && npm run build

      - name: Deploy to GitHub Pages
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./web/build
          user_name: github-actions[bot]
          user_email: 41898282+github-actions[bot]@users.noreply.github.com
```

3. GitHub 저장소 설정의 "Pages" 섹션에서 배포 소스를 `gh-pages` 브랜치로 설정합니다.

### 참고사항

- GitHub Pages 배포 후 사이트는 `https://<username>.github.io/use-react/`에서 접근할 수 있습니다.
- 첫 배포 후 변경 사항이 반영되기까지 몇 분이 소요될 수 있습니다.
- 문제가 발생하면 GitHub Actions 탭에서 워크플로우 실행 상태를 확인하세요.
