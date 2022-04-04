import { callRemoteFunction } from "../../messenging";
import { FunctionName } from "../../messenging/callRemoteFunction";

enum GoBackErrors {
  UNKNOWN_ERROR = 'UNKNOWN_ERROR',
}

/**
 * Will go back to the parent block of this javascript block.
 * @name goBack
 * @public
 * @returns {Promise<void>}
 */
const goBack = (): Promise<void> => 
  callRemoteFunction<void, GoBackErrors>(FunctionName.goBack)

export default goBack