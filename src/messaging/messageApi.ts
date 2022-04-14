export const isInAppWebView = typeof window.flutter_inappwebview === "object";

const messageApi = isInAppWebView ? window.myjsblock : window

console.debug('Messaging API:',`${isInAppWebView ? 'in app' : 'iframe'}`)

export default messageApi