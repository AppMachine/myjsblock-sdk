import { callRemoteFunction } from '../../messaging'
import { ArgumentErrors, UnknownErrors } from '../../types/BridgeErrors'
import BridgeFunction from '../../types/BridgeFunction'

type GetImageUrlResult = string

export type ImageDimensions = {
  width: number | null
  height: number | null
}

/**
 * Get an image URL based on an image ID
 * @public
 * @param {string} imageId
 * @param {object<ImageDimensions>} imageDimensions An object containing a width and a height.
 * @returns {Promise<string>} Promise with url of an image.
 * @throws  {Error} If no valid imageId has been specified.
 */
const getImageUrl = (imageId: string, { width = null, height = null }: ImageDimensions): Promise<GetImageUrlResult> =>
  callRemoteFunction<GetImageUrlResult, UnknownErrors & ArgumentErrors>(BridgeFunction.getImageUrl, {
    imageId,
    width,
    height,
  })

export default getImageUrl
