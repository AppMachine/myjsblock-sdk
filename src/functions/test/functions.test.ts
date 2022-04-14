
// import '../../../test/setup/stubs'
import callRemoteFunction from '../../messaging/callRemoteFunction';
import functionsData from './functions.dummy'
import * as libFunctions from '..'
import Mock = jest.Mock

jest.mock('../../messenging/callRemoteFunction', () => ({
  __esModule: true,
  default: jest.fn()
}))

describe('SDK Functions - each',() => {
  beforeEach(() => {
    (callRemoteFunction as Mock).mockResolvedValue(undefined);
  })

  afterEach(() => {
    jest.clearAllMocks()
  })
  
  test.each(
    Object.entries(functionsData)
  )('Calls %s correctly', async (functionName, { args = [], expectedFunctionName, expectedOptions }) => {    
    type Functions = Record<string, (...args: unknown[]) => Promise<unknown>>
    const functions = libFunctions as unknown as Functions

    const parameters = args?.map(({value}) => value)
    const options = Object.fromEntries(args?.map(({name, value}) => [name, value]))

    await functions[functionName](...parameters)
  
    if (args.length || expectedOptions) {
      expect(callRemoteFunction).toHaveBeenCalledWith(expectedFunctionName ?? functionName, expectedOptions ?? options)
    } else {
      expect(callRemoteFunction).toHaveBeenCalledWith(expectedFunctionName ?? functionName)
    }
    
  })
})