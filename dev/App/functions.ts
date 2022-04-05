import setCurrentRecordById from '../../src/functions/data/setCurrentRecordById'
import {FunctionName} from '../../src/messenging/callRemoteFunction'
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

const functions: Record<FunctionName, FunctionOption> = {
  [FunctionName.getProperty]: {
    args: [{
      name: 'propertyName',
      value: 'caption',
    }],
    callFunction: getProperty
  },
  [FunctionName.showAlert]: {
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
  [FunctionName.getCurrentRecord]: {
    args: [],
    callFunction: getCurrentRecord
  },
  [FunctionName.getRecords]: {
    args: [],
    callFunction: getRecords
  },
  [FunctionName.setCurrentRecordById]: {
    args: [{
      name: 'recordId',
      value: '',
    }],
    callFunction: setCurrentRecordById
  },
  [FunctionName.showLoader]: {
    args: [],
    description: 'Shows native loader, will call hideLoader after 2 seconds.',
    callFunction: async () => {
      await showLoader()
      
      setTimeout(() => {
        hideLoader()
      }, 2000)
    }
  },
  [FunctionName.hideLoader]: {
    hide: true,
    args: [],
    callFunction: async () => {},
  },
  [FunctionName.goBack]: {
    hide: true,
    args: [],
    callFunction: async () => {},
  },
  [FunctionName.goToBlock]: {
    hide: true,
    args: [{
      name: 'recordId',
      value: '',
    }],
    callFunction: async () => {},
  },
  [FunctionName.getImageUrl]: {
    hide: true,
    args: [{
      name: 'imageId',
      value: '',
    }],
    callFunction: async () => {},
  }
}

export default functions