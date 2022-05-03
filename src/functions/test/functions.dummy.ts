import BridgeFunction from '../../types/BridgeFunction'

export interface Argument {
  name: string
  value: unknown
  hide?: boolean
}

export interface FunctionOption {
  args?: Argument[]
  expectedFunctionName?: BridgeFunction
  expectedOptions?: Record<string, any> // eslint-disable-line @typescript-eslint/no-explicit-any
}

const functionsDummyData: Record<BridgeFunction, FunctionOption> = {
  [BridgeFunction.getBlockName]: {
    expectedFunctionName: BridgeFunction.getProperty,
    expectedOptions: {
      name: 'caption',
    },
  },
  [BridgeFunction.getProperty]: {
    args: [{
      name: 'name',
      value: 'asd',
    }],
  },
  [BridgeFunction.getImageUrl]: {
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
  [BridgeFunction.showLoader]: {},
  [BridgeFunction.hideLoader]: {},
  [BridgeFunction.getRecords]: {},
  [BridgeFunction.getCurrentRecord]: {},
  [BridgeFunction.setCurrentRecordById]: {
    args: [{
      name: 'recordId',
      value: 'myRecordId',
    }],
  },
  [BridgeFunction.showAlert]: {
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
  [BridgeFunction.goBack]: {},
  [BridgeFunction.navigate]: {
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
  [BridgeFunction.pickImage]: {},
}

export default functionsDummyData
