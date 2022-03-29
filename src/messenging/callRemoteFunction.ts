import uid from '../utils/uid'
import addMessageListener from './addMessageListener'
import postMessage, { Message } from './postMessage'

export enum FunctionName {
  getRecords = 'getRecords',
  showAlertMessage = 'showAlertMessage',
  setCurrentRecord = 'setCurrentRecord',
  getCurrentRecord = 'getCurrentRecord',
  getProperty = 'getProperty'
}

const callRemoteFunction = <Response, FunctionErrorCodes>(
    functionName: FunctionName,
    args: Message['arguments'],
  ): Promise<Response>  => new Promise((resolve, reject) => {
    const requestId = uid()
  
    addMessageListener<Response, FunctionErrorCodes>(requestId, (response) => {
      if ('error' in response) {
        const error = new Error(response.message)
        error.name = String(response.error)

        if('traceId' in response) {
          error.message =  `${error.message}, traceId: ${response.traceId}`
        }
    
        reject(error)
      } else {
        resolve(response.value)
      }    
    })
  
    postMessage({
      id: requestId,
      functionName,
      arguments: args,
    })
  })

export default callRemoteFunction