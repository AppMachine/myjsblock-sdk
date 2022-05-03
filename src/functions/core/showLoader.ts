import { callRemoteFunction } from '../../messaging'
import { UnknownErrors } from '../../types/BridgeErrors'
import BridgeFunction from '../../types/BridgeFunction'

/**
 * Show a native loader overlay.
 * @public
 * @returns {Promise<void>}
 */
const showLoader = (): Promise<void> => callRemoteFunction<void, UnknownErrors>(BridgeFunction.showLoader)

export default showLoader
