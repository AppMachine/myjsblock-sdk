import BridgeFunction from '../../types/BridgeFunction'

export interface Argument {
  name: string
  value: unknown
  hide?: boolean
  serialize?: (value: string) => unknown
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
  [BridgeFunction.getRecords]: {
    args: [
      {
        name: 'variableName',
        value: 'WebService1',
      },
      {
        name: 'parameters',
        value: {},
      },
    ],
  },
  [BridgeFunction.getCurrentRecord]: {},
  // [BridgeFunction.setCurrentRecordById]: {
  //   args: [{
  //     name: 'recordId',
  //     value: 'myRecordId',
  //   }],
  // },
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
  [BridgeFunction.showDialog]: {
    args: [{
      name: 'title',
      value: 'This is a dialog!',
    },
    {
      name: 'options',
      value: JSON.stringify(['Option 1', 'Option 2']),
      serialize: (input) => JSON.parse(input),
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
  [BridgeFunction.pickImage]: {
    args: [
      {
        name: 'imageOptions',
        value: {
          maxHeight: undefined,
          maxWidth: undefined,
          quality: 100,
        },
        hide: true,
      },
      {
        name: 'showCameraOption',
        value: true,
        hide: true,
      },
      {
        name: 'showGalleryOption',
        value: false,
        hide: true,
      },
    ],
    expectedOptions: {
      maxWidth: undefined,
      maxHeight: undefined,
      quality: 100,
      showCameraOption: true,
      showGalleryOption: false,
    },
  },
  [BridgeFunction.getUserInfo]: {},
}

export default functionsDummyData
