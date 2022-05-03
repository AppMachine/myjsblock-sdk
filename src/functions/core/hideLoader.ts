import { callRemoteFunction } from '../../messaging'
import BridgeFunction from '../../types/BridgeFunction'

 enum HideLoaderErrors {
   UNKNOWN_ERROR = 'UNKNOWN_ERROR',
 }

/**
  * Hide the native loader overlay.
  * @public
  * @returns {Promise<void>} Promise
  */
const hideLoader = (): Promise<void> =>
  callRemoteFunction<void, HideLoaderErrors>(BridgeFunction.hideLoader)

export default hideLoader
