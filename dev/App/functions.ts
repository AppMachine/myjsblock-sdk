import setCurrentRecordById from '../../src/functions/data/setCurrentRecordById'
import { Function } from '../../src/types/function'

import { 
  getProperty,
  showAlert,
  getCurrentRecord,
  getRecords,
  showLoader,
  hideLoader
} from '../../src/sdk'

export interface Argument {
  name: string,
  value: unknown
}

export interface FunctionOption {
  args: Argument[],
  jsonInput?: boolean
  description?: string
  callFunction: (...args: any[]) => Promise<unknown> // eslint-disable-line @typescript-eslint/no-explicit-any,
  hide?: boolean
}

const functions: Record<Function, FunctionOption> = {
  [Function.getProperty]: {
    args: [{
      name: 'propertyName',
      value: 'caption',
    }],
    callFunction: getProperty
  },
  [Function.showAlert]: {
    args: [{
      name: 'title',
      value: 'This is an alert!',
    },
    {
      name: 'message',
      value: 'hello world',
    }],
    callFunction: showAlert
  },
  [Function.getCurrentRecord]: {
    args: [],
    callFunction: getCurrentRecord
  },
  [Function.getRecords]: {
    args: [],
    callFunction: getRecords
  },
  [Function.setCurrentRecordById]: {
    args: [{
      name: 'recordId',
      value: '',
    }],
    callFunction: setCurrentRecordById
  },
  [Function.showLoader]: {
    args: [],
    description: 'Shows native loader, will call hideLoader after 2 seconds.',
    callFunction: async () => {
      await showLoader()
      
      await new Promise((resolve) =>  setTimeout(resolve, 2000))
      await hideLoader()
    }
  },
  [Function.hideLoader]: {
    hide: true,
    args: [],
    callFunction: async () => {},
  },
  [Function.goBack]: {
    hide: true,
    args: [],
    callFunction: async () => {},
  },
  [Function.goToBlock]: {
    hide: true,
    args: [{
      name: 'recordId',
      value: '',
    }],
    callFunction: async () => {},
  },
  [Function.getImageUrl]: {
    args: [{
      name: 'imageId',
      value: '',
    }],
    callFunction: async () => {
      throw new Error('hoi obe')
    },
  }
}

export default functions