import { callRemoteFunction } from '../../messaging'
import BridgeFunction from '../../types/BridgeFunction'

enum ShowLoaderErrors {
  UNKNOWN_ERROR = 'UNKNOWN_ERROR',
}

/**
 * Show a native loader overlay.
 * @public
 * @returns {Promise<void>}
 */
const showLoader = (): Promise<void> => callRemoteFunction<void, ShowLoaderErrors>(BridgeFunction.showLoader)

export default showLoader
