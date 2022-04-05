import { callRemoteFunction } from "../../messenging"
import { FunctionName } from "../../messenging/callRemoteFunction"

enum ShowLoaderErrors {
  UNKNOWN_ERROR = 'UNKNOWN_ERROR',
}

/**
 * Allows you to show the native loader overlay
 * @public
 * @returns {Promise<void>}
 */
const showLoader = (): Promise<void> => 
  callRemoteFunction<void, ShowLoaderErrors>(FunctionName.showLoader)

export default showLoader