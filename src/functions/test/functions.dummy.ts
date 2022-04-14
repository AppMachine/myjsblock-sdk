import MyJsBlockFunction from '../../types/function'

export interface Argument {
  name: string
  value: unknown
  hide?: boolean
}

export interface FunctionOption {
  args?: Argument[]
  expectedFunctionName?: MyJsBlockFunction
  expectedOptions?: Record<string, any> // eslint-disable-line @typescript-eslint/no-explicit-any
}

const functionsDummyData: Record<MyJsBlockFunction, FunctionOption> = {
  [MyJsBlockFunction.getBlockName]: {
    expectedFunctionName: MyJsBlockFunction.getProperty,
    expectedOptions: {
      name: 'caption',
    },
  },
  [MyJsBlockFunction.getProperty]: {
    args: [{
      name: 'name',
      value: 'asd',
    }],
  },
  [MyJsBlockFunction.getImageUrl]: {
    args: [
      {
        name: 'imageId',
        value: 'a181f12c-3116-11e5-80d0-00155d130a43',
      },
      {
        name: 'dimensions',
        value: {
          width: 300,
          height: 300,
        },
      },
    ],
    expectedOptions: {
      imageId: 'a181f12c-3116-11e5-80d0-00155d130a43',
      width: 300,
      height: 300,
    },
  },
  [MyJsBlockFunction.showLoader]: {},
  [MyJsBlockFunction.hideLoader]: {},
  [MyJsBlockFunction.getRecords]: {},
  [MyJsBlockFunction.getCurrentRecord]: {},
  [MyJsBlockFunction.setCurrentRecordById]: {
    args: [{
      name: 'recordId',
      value: 'myRecordId',
    }],
  },
  [MyJsBlockFunction.showAlert]: {
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
      value: ['yes', 'no'],
      hide: true,
    }],
  },
  [MyJsBlockFunction.goBack]: {},
  [MyJsBlockFunction.navigate]: {
    args: [
      {
        name: 'variableName',
        value: 'Information3',
      },
      {
        name: 'properties',
        value: {
          trackId: 'abcdefg',
        },
        hide: true,
      },
    ],
  },
  [MyJsBlockFunction.pickImage]: {},
}

export default functionsDummyData
