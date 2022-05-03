import callRemoteFunction from '../../messaging/callRemoteFunction'
import { UnknownErrors, ArgumentErrors } from '../../types/BridgeErrors'
import BridgeFunction from '../../types/BridgeFunction'

interface GetBlockNameResult {
  name: string
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
  callRemoteFunction<GetBlockNameResult, UnknownErrors & ArgumentErrors>(BridgeFunction.getProperty, {
    name: 'caption',
  })

export default getBlockName
