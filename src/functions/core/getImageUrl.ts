import { callRemoteFunction } from '../../messaging'
import MyJsBlockFunction from '../../types/function'

type GetImageUrlResult = string

enum GetImageUrlErrors {
  NO_IMAGE_ID_PROVIDED = 'NO_IMAGE_ID_PROVIDED'
}

export type ImageDimensions = {
  width: number | null
  height: number | null
}

/**
 * Allows you to get an image url based on an image id
 * @public
 * @param {string} imageId
 * @returns {Promise<string>} Promise with url of an image
 * @throws  {Error} If no valid imageId has been specified.
 */
const getImageUrl = (imageId: string, { width = null, height = null }: ImageDimensions): Promise<GetImageUrlResult> =>
  callRemoteFunction<GetImageUrlResult, GetImageUrlErrors>(MyJsBlockFunction.getImageUrl, {
    imageId,
    width,
    height,
  })

export default getImageUrl
