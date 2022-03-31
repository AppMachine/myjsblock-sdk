
import { callRemoteFunction } from "../../messenging"
 import { FunctionName } from "../../messenging/callRemoteFunction"
 
 enum HideLoaderErrors {
   UNKNOWN_ERROR = 'UNKNOWN_ERROR',
 }
 
 /**
  * 
  * Allows you to hide the native loader overlay
  * @public
  * @returns {Promise<void>}
  */
 const hideLoader = (): Promise<void> => 
   callRemoteFunction<void, HideLoaderErrors>(FunctionName.hideLoader)
 
 export default hideLoader