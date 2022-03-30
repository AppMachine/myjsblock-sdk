import {FunctionName} from '../../src/messenging/callRemoteFunction'
import { 
  getProperty,
  showAlertMessage,
  getCurrentRecord
} from '../../src/sdk'

export interface Argument {
  name: string,
  value: unknown
}
export interface FunctionOption {
  args: Argument[],
  jsonInput?: boolean
  callFunction: (...args: any[]) => Promise<unknown> // eslint-disable-line @typescript-eslint/no-explicit-any
}

const functions: Record<FunctionName, FunctionOption> = {
  [FunctionName.getProperty]: {
    args: [{
      name: 'propertyName',
      value: 'caption',
    }],
    jsonInput: false,
    callFunction: getProperty
  },
  [FunctionName.showAlertMessage]: {
    args: [{
      name: 'title',
      value: 'This is an alert!',
    },
    {
      name: 'message',
      value: 'hello world',
    }],
    jsonInput: false,
    callFunction: showAlertMessage
  },
  [FunctionName.getCurrentRecord]: {
    args: [],
    jsonInput: false,
    callFunction: getCurrentRecord
  },
}

export default functions