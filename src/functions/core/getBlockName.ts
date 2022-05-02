import callRemoteFunction from '../../messaging/callRemoteFunction'
import BridgeFunction from '../../types/BridgeFunction'

interface GetBlockNameResult {
  name: string
}

enum GetBlockNameErrors {
  UNKNOWN_ERROR = 'UNKNOWN_ERROR',
  PROPERTY_NOT_FOUND = 'PROPERTY_NOT_FOUND',
}

/**
 * Get the name of the current block.
 * @public
 * @returns {Promise<GetBlockNameResult>} Name of the block
 * @throws {Error} If an unknown error occurs
 *
 * ```js
 * import { getBlockName } from '@myjsblock/sdk'
 *
 * const myProperty = await getBlockName()
 * //or
 * getBlockName().then(property => {
 *   console.log(property)
 * })
 *
 * ```
 */
const getBlockName = (): Promise<GetBlockNameResult> =>
  callRemoteFunction<GetBlockNameResult, GetBlockNameErrors>(BridgeFunction.getProperty, {
    name: 'caption',
  })

export default getBlockName
