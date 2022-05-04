import { callRemoteFunction } from '../../messaging'
import { UnknownErrors } from '../../types/BridgeErrors'
import BridgeFunction from '../../types/BridgeFunction'

/**
 * Will go back to the parent block of this javascript block.
 * @name goBack
 * @public
 * @returns {Promise<void>}
 */
const goBack = (): Promise<void> => callRemoteFunction<void, UnknownErrors>(BridgeFunction.goBack)

export default goBack
