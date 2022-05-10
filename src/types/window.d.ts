export {}

declare global {
  interface Window {
    debugMyjsblockSdk: boolean
    myjsblock: Pick<Window, 'postMessage' | 'addEventListener' | 'removeEventListener'>
    flutter_inappwebview?: object
    packageVersion: string
  }
}
