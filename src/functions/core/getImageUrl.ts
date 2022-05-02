import { callRemoteFunction } from '../../messaging'
import BridgeFunction from '../../types/BridgeFunction'

type GetImageUrlResult = string

enum GetImageUrlErrors {
  NO_IMAGE_ID_PROVIDED = 'NO_IMAGE_ID_PROVIDED',
  INVALID_ARGUMENTS = 'INVALID_ARGUMENTS'
}

export type ImageDimensions = {
  width: number | null
  height: number | null
}

/**
 * Get an image URL based on an image ID
 * @public
 * @param {string} imageId
 * @returns {Promise<string>} Promise with url of an image
 * @throws  {Error} If no valid imageId has been specified.
 */
const getImageUrl = (imageId: string, { width = null, height = null }: ImageDimensions): Promise<GetImageUrlResult> =>
  callRemoteFunction<GetImageUrlResult, GetImageUrlErrors>(BridgeFunction.getImageUrl, {
    imageId,
    width,
    height,
  })

export default getImageUrl
