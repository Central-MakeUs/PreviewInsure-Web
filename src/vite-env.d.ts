/// <reference types="vite/client" />

interface Window {
  ReactNativeWebView: {
    postMessage: (value: string) => void;
  };
}
