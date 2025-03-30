import useWebview from '../packages/useWebview';

export default function Example10_useWebview() {
  const {
    webView,
    isInstagramWebView,
    isKakaoWebView,
    isFacebookWebView,
    isLineWebView,
    isUnknownWebView,
  } = useWebview();

  return (
    <div>
      <div>{webView}</div>
      <div>{isInstagramWebView ? 'Instagram' : 'Not Instagram'}</div>
      <div>{isKakaoWebView ? 'Kakao' : 'Not Kakao'}</div>
      <div>{isFacebookWebView ? 'Facebook' : 'Not Facebook'}</div>
      <div>{isLineWebView ? 'Line' : 'Not Line'}</div>
      <div>{isUnknownWebView ? 'Unknown' : 'Known'}</div>
    </div>
  );
}
