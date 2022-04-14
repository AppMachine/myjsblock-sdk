import { callRemoteFunction } from '../../messaging'
import MyJsBlockFunction from '../../types/function'

 enum HideLoaderErrors {
   UNKNOWN_ERROR = 'UNKNOWN_ERROR',
 }

/**
  * Allows you to hide the native loader overlay
  * @public
  * @returns {Promise<void>} Promise
  */
const hideLoader = (): Promise<void> =>
  callRemoteFunction<void, HideLoaderErrors>(MyJsBlockFunction.hideLoader)

export default hideLoader
