import { PaginationOptions } from "../types/pagination";

export enum MessageType {
  GET_RECORDS = 'GET_RECORDS',
}

interface MessageData {
  type: MessageType
  data: object
  paginationOptions?: PaginationOptions
}

export const postMessage = (data: MessageData) => {
  window.postMessage(data, '*')
}

export const onMessage = (type: MessageType, callback: (event: MessageEvent) => void) => {
  addEventListener('message', callback, {
    once: true,
  });
};
