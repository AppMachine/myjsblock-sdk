import { callRemoteFunction } from '../../messaging'
import { UnknownErrors } from '../../types/BridgeErrors'
import BridgeFunction from '../../types/BridgeFunction'

type PickImageResult = string

enum PickImageErrors {
  PERMISSION_ERROR = 'PERMISSION_ERROR'
}

/**
 * Open native media picker for images.
 * @public
 * @returns {Promise<string>} Promise with string of base46 image.
 */
const pickImage = (): Promise<PickImageResult> =>
  callRemoteFunction<PickImageResult, UnknownErrors & PickImageErrors>(BridgeFunction.pickImage)

export default pickImage
