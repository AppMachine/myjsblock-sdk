import { callRemoteFunction } from "../../messenging"
import { Function } from "../../types/function";

enum ShowLoaderErrors {
  UNKNOWN_ERROR = 'UNKNOWN_ERROR',
}

/**
 * Allows you to show the native loader overlay
 * @public
 * @returns {Promise<void>}
 */
const showLoader = (): Promise<void> => 
  callRemoteFunction<void, ShowLoaderErrors>(Function.showLoader)

export default showLoader