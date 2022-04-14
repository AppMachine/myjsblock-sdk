import { Function } from '../../src/types/function'
import functionData from '../../src/functions/test/functions.dummy'
import * as libFunctions from '../../src/functions'

import { 
  showLoader,
  hideLoader
} from '../../src/sdk'

export interface Argument {
  name: string,
  value: unknown,
  hide?: boolean
}

export interface FunctionOption {
  args?: Argument[],
  jsonInput?: boolean
  description?: string
  callFunction?: (...args: any[]) => Promise<unknown> // eslint-disable-line @typescript-eslint/no-explicit-any,
  hide?: boolean
}

const functionOverrides: Partial<{ [key in Function]: FunctionOption }> = {
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
    hide: true
  }
}

const functions = Object.fromEntries(
  Object.entries(functionData).map(([functionName, options]) => {
    let newOptions = options

    if (functionName in libFunctions) {
      Object.assign(newOptions, {
        callFunction: (libFunctions as unknown as Record<Function, FunctionOption['callFunction']>)[functionName as Function]
      })
    }

    if (functionName in functionOverrides) {
      Object.assign(newOptions, functionOverrides[functionName as Function])
    }

    return [functionName, newOptions]
  })
)

export default functions