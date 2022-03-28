import uid from '../utils/uid'
import onMessage, { MessageCallback } from './onMessage'
import { Message } from './postMessage'

export enum FunctionName {
  getRecords = 'getRecords',
  showAlertMessage = 'showAlertMessage',
  setCurrentRecord = 'setCurrentRecord',
  getCurrentRecord = 'getCurrentRecord',
  getProperty = 'getProperty'
}

const useFunction = <Response, FunctionErrorCodes>(
    functionName: FunctionName,
    args: Message['arguments'],
    callback: MessageCallback<Response, FunctionErrorCodes>
  ) => {
  const requestId = uid()

  onMessage<Response, FunctionErrorCodes>(requestId, callback)

  postMessage({
    id: requestId,
    functionName,
    arguments: args,
  })
}

export default useFunction