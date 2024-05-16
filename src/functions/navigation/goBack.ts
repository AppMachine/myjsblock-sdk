import { callRemoteFunction } from '../../messaging'
import { UnknownErrors } from '../../types/BridgeErrors'
import BridgeFunction from '../../types/BridgeFunction'

/**
 * Will go back to the parent block of this javascript block.
 * @name goBack
 * @public
 * @param   {Boolean} reload Enable "Reload screen" option
 * @returns {Promise<void>}
 */
const goBack = (reload = false): Promise<void> => callRemoteFunction<void, UnknownErrors>(BridgeFunction.goBack, { reload })

export default goBack
