import { callRemoteFunction } from '../../messaging'
import MyJsBlockFunction from '../../types/function'

enum GoBackErrors {
  UNKNOWN_ERROR = 'UNKNOWN_ERROR',
}

/**
 * Will go back to the parent block of this javascript block.
 * @name goBack
 * @public
 * @returns {Promise<void>}
 */
const goBack = (): Promise<void> => callRemoteFunction<void, GoBackErrors>(MyJsBlockFunction.goBack)

export default goBack
