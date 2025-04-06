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

## 배포

정적 사이트는 GitHub Pages, Netlify, Vercel 등의 서비스에 쉽게 배포할 수 있습니다.

### GitHub Pages 배포

```bash
GIT_USER=<Your GitHub username> npm run deploy
```

자세한 배포 정보는 [Docusaurus 배포 문서](https://docusaurus.io/docs/deployment)를 참고하세요.
