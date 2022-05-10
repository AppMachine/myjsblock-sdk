import { callRemoteFunction } from '../../messaging'
import { UnknownErrors } from '../../types/BridgeErrors'
import BridgeFunction from '../../types/BridgeFunction'

type PickImageResult = string

enum PickImageErrors {
  OPERATION_CANCELLED="OPERATION_CANCELLED",
}

interface ImageOptions {
  /**
   * Maximum height of the image
   */
  maxHeight?: number
  /**
   * Maximum width of the image
   */
  maxWidth?: number
  /**
   * Quality of the image
   * 100 being original quality and 1 the maximum amount of compression depending on the file type
   */
  quality?: number
}

/**
 * Open native media picker or camera app for images
 *
 * If only one option is enabled either the gallery or the camera app will be opened immediately
 *
 * Note that an exception will be thrown when there is no camera available or if the user denied access.
 *
 * @public
 * @param   {String}          imageOptions Options related to the resulting image
 * @param   {Boolean}         showCameraOption Enable "Take photo" option
 * @param   {Boolean}         showGalleryOption Enable "Select from library" option
 * @returns {Promise<string>} Promise with string of base46 image.
 */
const pickImage = (
  imageOptions: ImageOptions = {
    quality: 100,
  },
  showCameraOption = true,
  showGalleryOption = true,
): Promise<PickImageResult> =>
  callRemoteFunction<PickImageResult, UnknownErrors & PickImageErrors>(BridgeFunction.pickImage, {
    maxWidth: imageOptions.maxWidth,
    maxHeight: imageOptions.maxHeight,
    quality: imageOptions.quality,
    showCameraOption,
    showGalleryOption,
  })

export default pickImage
