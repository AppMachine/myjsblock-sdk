import messageApi, { isInAppWebView } from "./messageApi";
import { Function } from "../types/function";

export type RequestId = string

export interface Message {
  id: RequestId
  functionName: Function
  arguments?: object
}

const postMessage = (message: Message) => {
  // if (window.debugMyjsblockSdk) {
    console.debug('POST:', message)
  // }

  const messageStringified = JSON.stringify(message)
  
  if (isInAppWebView) {
    messageApi.postMessage(messageStringified);
  } else {
    window.parent.postMessage(messageStringified, '*');
  }
}

export default postMessage