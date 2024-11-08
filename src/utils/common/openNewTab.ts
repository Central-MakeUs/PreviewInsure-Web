const isApp = () => {
  let isApp = false;

  if (typeof window !== 'undefined' && window.ReactNativeWebView) {
    isApp = true;
  }

  return isApp;
};

const sendRouterEvent = (path: string): void => {
  window.ReactNativeWebView.postMessage(JSON.stringify({ type: 'ROUTER_EVENT', data: path }));
};

export const openNewTab = (url: string) => {
  if (isApp()) {
    sendRouterEvent(url);
  } else {
    window.open(url, '_blank', 'noopener, noreferrer');
  }
};

export const closeNewTab = () => {
  if (isApp()) window.ReactNativeWebView.postMessage(JSON.stringify({ type: 'ROUTER_EVENT', data: 'back' }));
  window.location.reload();
};
