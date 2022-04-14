import { Function } from '../../types/function'

export interface Argument {
  name: string,
  value: unknown,
  hide?: boolean
}

export interface FunctionOption {
  args?: Argument[],
  expectedFunctionName?: Function,
  expectedOptions?: Record<string, any>
}

const functionsDummyData: Record<Function, FunctionOption> = {
  [Function.getBlockName]: {
    expectedFunctionName: Function.getProperty,
    expectedOptions: {
      name: 'caption'
    }
  },
  [Function.getProperty]: {
    args: [{
      name: 'name',
      value: 'asd',
    }]
  },
  [Function.getImageUrl]: {
    args: [
      {
        name: 'imageId',
        value: 'a181f12c-3116-11e5-80d0-00155d130a43',
      },
      {
        name: 'dimensions',
        value: {
          width: 300,
          height: 300
        }
      }
    ],
    expectedOptions: {
      imageId: 'a181f12c-3116-11e5-80d0-00155d130a43',
      width: 300,
      height: 300,
    }
  },
  [Function.showLoader]: {},
  [Function.hideLoader]: {},
  [Function.getRecords]: {},
  [Function.getCurrentRecord]: {},
  [Function.setCurrentRecordById]: {
    args: [{
      name: 'recordId',
      value: 'myRecordId',
    }]
  },
  [Function.showAlert]: {
    args: [{
      name: 'title',
      value: 'This is an alert!',
    },
    {
      name: 'message',
      value: 'hello world',
    },
    {
      name: 'buttons',
      value: [ 'yes', 'no' ],
      hide: true
    }],
  },
  [Function.goBack]: {},
  [Function.navigate]: {
    args: [{
      name: 'variableName',
      value: 'Information3',
    }]
  },
  [Function.pickImage]: {},
}

export default functionsDummyData