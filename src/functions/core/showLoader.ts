import { callRemoteFunction } from '../../messaging'
import MyJsBlockFunction from '../../types/function'

enum ShowLoaderErrors {
  UNKNOWN_ERROR = 'UNKNOWN_ERROR',
}

/**
 * Allows you to show the native loader overlay
 * @public
 * @returns {Promise<void>}
 */
const showLoader = (): Promise<void> => callRemoteFunction<void, ShowLoaderErrors>(MyJsBlockFunction.showLoader)

export default showLoader
