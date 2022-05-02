import { callRemoteFunction } from '../../messaging'
import BridgeFunction from '../../types/BridgeFunction'

type PickImageResult = string

enum PickImageErrors {
  UNKNOWN_ERROR = 'UNKNOWN_ERROR',
  PERMISSION_ERROR = 'PERMISSION_ERROR'
}

/**
 * Open native media picker for images.
 * @public
 * @returns {Promise<string>} Promise with string of base46 image.
 */
const pickImage = (): Promise<PickImageResult> =>
  callRemoteFunction<PickImageResult, PickImageErrors>(BridgeFunction.pickImage)

export default pickImage
