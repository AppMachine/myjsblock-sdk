import { PaginationOptions } from "../types/pagination";

export enum FunctionName {
  getRecords = 'getRecords',
  showAlertMessage = 'showAlertMessage',
  setCurrentRecord = 'setCurrentRecord',
  getCurrentRecord = 'getCurrentRecord',
  getProperty = 'getProperty'
}

interface MessageData {
  functionName: FunctionName
  arguments?: object
  // paginationOptions?: PaginationOptions
}

export const postMessage = (message: MessageData) => {
  window.postMessage(message, '*')
}

export const onMessage = <MessageDataResponse>(
  requestId: string, 
  callback: (event: MessageEvent<MessageDataResponse>) => void
) => {
  addEventListener('message', callback);
  //add messenger
  // requestId

  // const 
};
