import { callRemoteFunction } from "../../messenging";
import { Function } from "../../types/function";

type GetImageUrlResult = string

enum GetImageUrlErrors {
  NO_IMAGE_ID_PROVIDED = 'NO_IMAGE_ID_PROVIDED'
}

export type ImageDimensions = {
  width: number
  height: number
}

/**
 * Allows you to get an image url based on an image id
 * @public
 * @param {string} imageId
 * @returns {Promise<string>} Promise with url of an image
 * @throws  {Error} If no valid imageId has been specified.
 */
const getImageUrl = (imageId: string, { width, height }: ImageDimensions): Promise<GetImageUrlResult> => 
  callRemoteFunction<GetImageUrlResult, GetImageUrlErrors>(Function.getImageUrl, {
    imageId,
    width,
    height
  })

export default getImageUrl