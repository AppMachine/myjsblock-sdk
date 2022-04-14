import MyJsBlockFunction from '../../src/types/function'
import functionData from '../../src/functions/test/functions.dummy'
import * as libFunctions from '../../src/functions'

import {
  showLoader,
  hideLoader,
  getImageUrl,
} from '../../src/sdk'

export interface Argument {
  name: string
  value: unknown
  hide?: boolean
}

export interface FunctionOption {
  args?: Argument[]
  jsonInput?: boolean
  description?: string
  callFunction?: (...args: any[]) => Promise<unknown> // eslint-disable-line @typescript-eslint/no-explicit-any,
  hide?: boolean
}

const functionOverrides: Partial<{ [key in MyJsBlockFunction]: FunctionOption }> = {
  [MyJsBlockFunction.showLoader]: {
    args: [],
    description: 'Shows native loader, will call hideLoader after 2 seconds.',
    callFunction: async () => {
      await showLoader()

      await new Promise<void>((resolve) => { setTimeout(resolve, 2000) })
      await hideLoader()
    },
  },
  [MyJsBlockFunction.getImageUrl]: {
    args: [
      {
        name: 'imageId',
        value: 'a181f12c-3116-11e5-80d0-00155d130a43',
      },
      {
        name: 'width',
        value: 300,
      },
      {
        name: 'height',
        value: 300,
      },
    ],
    callFunction: async (imageId, width, height) => {
      await getImageUrl(imageId, { width, height })
    },
  },
  [MyJsBlockFunction.hideLoader]: {
    hide: true,
  },
}

const functions = Object.fromEntries(
  Object.entries(functionData).map(([functionName, options]) => {
    const newOptions = options

    if (functionName in libFunctions) {
      Object.assign(newOptions, {
        callFunction: (libFunctions as unknown as Record<MyJsBlockFunction, FunctionOption['callFunction']>)[functionName as MyJsBlockFunction],
      })
    }

    if (functionName in functionOverrides) {
      Object.assign(newOptions, functionOverrides[functionName as MyJsBlockFunction])
    }

    return [functionName, newOptions]
  }),
)

export default functions
