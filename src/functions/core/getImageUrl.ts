import { callRemoteFunction } from "../../messenging";
import { FunctionName } from "../../messenging/callRemoteFunction";

type GetImageUrlResult = string

enum GetImageUrlErrors {
  NO_IMAGE_ID_PROVIDED = 'NO_IMAGE_ID_PROVIDED'
}

/**
 * Allows you to get an image url based on an image id
 * @public
 * @param {string} imageId
 * @returns {Promise<string>} Promise with url of an image
 * @throws  {Error} If no valid imageId has been specified.
 */
const getImageUrl = (imageId: string): Promise<GetImageUrlResult> => 
  callRemoteFunction<GetImageUrlResult, GetImageUrlErrors>(FunctionName.getImageUrl, {
    imageId
  })

export default getImageUrl