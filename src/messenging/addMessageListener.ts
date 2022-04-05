import messageApi from "./messageApi";
import { RequestId } from "./postMessage";

const DEFAULT_TIMEOUT = 10000; // 10 seconds

export enum MessageApiErrors {
  TIMEOUT_EXCEEDED = 'TIMEOUT_EXCEEDED',
  NO_VALUE_RETURNED = 'NO_VALUE_RETURNED',
  UNKNOWN_FUNCTION = 'UNKNOWN_FUNCTION'
}

export interface MessageErrorResponse<ErrorCodes> {
  requestId: RequestId
  error: MessageApiErrors | ErrorCodes
  message: string
  traceId?: string
}

export interface MessageResponse<Value> {
  requestId: RequestId,
  value: Value
}

export type MessageCallback<Response, ErrorCodes> = (
  event: MessageResponse<Response> | MessageErrorResponse<ErrorCodes>
) => void

const addMessageListener = <Response, ErrorCodes>(
  requestId: RequestId, 
  callback: MessageCallback<Response, ErrorCodes>,
  timeout = DEFAULT_TIMEOUT
) => {
  let timeoutId: number // eslint-disable-line prefer-const

  const eventCallback = (event: MessageEvent<string>) => {
    if (event.source == window) {
      return;
    }

    const response = JSON.parse(event.data)

    if (response.requestId !== requestId) {
      return
    }

    callback(response)
    
    messageApi.removeEventListener('message', eventCallback);

    if (timeoutId) {
      clearTimeout(timeoutId);
    }
  }

  timeoutId = setTimeout(() => {
    callback({
      requestId,
      error: MessageApiErrors.TIMEOUT_EXCEEDED,
      message: 'Timeout exceeded, no response from the App'
    })
    messageApi.removeEventListener('message', eventCallback);
  }, timeout) as unknown as number

  messageApi.addEventListener('message', eventCallback)
};

export default addMessageListener