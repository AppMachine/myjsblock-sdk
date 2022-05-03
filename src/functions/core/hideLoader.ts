import { callRemoteFunction } from '../../messaging'
import { UnknownErrors } from '../../types/BridgeErrors'
import BridgeFunction from '../../types/BridgeFunction'

 enum HideLoaderErrors {
  OPERATION_NOT_ALLOWED = 'OPERATION_NOT_ALLOWED',
 }

/**
  * Hide the native loader overlay.
  * @public
  * @returns {Promise<void>} Promise
  */
const hideLoader = (): Promise<void> =>
  callRemoteFunction<void, HideLoaderErrors & UnknownErrors>(BridgeFunction.hideLoader)

export default hideLoader
