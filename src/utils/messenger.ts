import { PaginationOptions } from "../types/pagination";

export enum MessageType {
  GetRecords = 'GET_RECORDS',
  ShowAlertMessage = 'SHOW_ALERT_MESSAGE',
  SetCurrentRecord = 'SET_CURRENT_RECORD',
  GetCurrentRecord = 'GET_CURRENT_RECORD'
}

interface MessageData {
  type: MessageType
  data?: object
  paginationOptions?: PaginationOptions
}

export const postMessage = (message: MessageData) => {
  window.postMessage(message, '*')
}

export const onMessage = <MessageDataResponse>(
  type: MessageType, 
  callback: (event: MessageEvent<MessageDataResponse>) => void
) => {
  addEventListener('message', callback, {
    once: true,
  });
};
