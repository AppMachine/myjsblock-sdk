import uid from '../utils/uid'
import addMessageListener, { MessageApiErrors } from './addMessageListener'
import postMessage, { Message } from './postMessage'
import BridgeFunction from '../types/BridgeFunction'

const callRemoteFunction = <Response, FunctionErrorCodes>(
  functionName: BridgeFunction,
  args?: Message['arguments'],
): Promise<Response> => new Promise((resolve, reject) => {
    const requestId = uid()

    addMessageListener<Response, FunctionErrorCodes>(requestId, (response) => {
      // if(window.debugMyjsblockSdk) {
      console.debug('Received:', response)
      // }
      if ('error' in response) {
        const error = new Error(response.message)
        error.name = String(response.error).toUpperCase()

        if ('traceId' in response) {
          error.message = `${error.message}, traceId: ${response.traceId}`
        }

        reject(error)
      } else if (!('value' in response)) {
        const error = new Error('No response value returned.')
        error.name = MessageApiErrors.NO_VALUE_RETURNED

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
