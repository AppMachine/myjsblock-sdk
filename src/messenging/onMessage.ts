import messageApi from "./messageApi";
import { RequestId } from "./postMessage";

const DEFAULT_TIMEOUT = 10000; // 10 seconds

enum MessageApiErrors {
  TIMEOUT_EXCEEDED = 'TIMEOUT_EXCEEDED',
  FUNCTION_NOT_FOUND = 'FUNCTION_NOT_FOUND'
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

const onMessage = <Response, ErrorCodes>(
  requestId: RequestId, 
  callback: MessageCallback<Response, ErrorCodes>
) => {
  let timeout: NodeJS.Timeout // eslint-disable-line prefer-const

  const eventCallback = (event: MessageEvent<string>) => {
    const response = JSON.parse(event.data)

    if (response.requestId === requestId) {
      callback(response)
      messageApi.removeEventListener('message', eventCallback);

      if(timeout) {
        clearTimeout(timeout);
      }
    }
  }

  timeout = setTimeout(() => {
    callback({
      requestId,
      error: MessageApiErrors.TIMEOUT_EXCEEDED,
      message: 'Timeout exceeded, no response from the App'
    })
    messageApi.removeEventListener('message', eventCallback);
  }, DEFAULT_TIMEOUT)

  messageApi.addEventListener('message', eventCallback)
};

export default onMessage