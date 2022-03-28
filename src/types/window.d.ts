export {};

declare global {
  interface Window {
    myjsblock: Pick<Window, 'postMessage' | 'addEventListener' | 'removeEventListener'>
    flutter_inappwebview?: object
  }
}