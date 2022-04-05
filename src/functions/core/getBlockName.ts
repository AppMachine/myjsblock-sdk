import callRemoteFunction from "../../messenging/callRemoteFunction";
import { Function } from "../../types/function";

interface GetBlockNameResult {
	name: string;
}

enum GetBlockNameErrors {
  UNKNOWN_ERROR = 'UNKNOWN_ERROR',
  PROPERTY_NOT_FOUND = 'PROPERTY_NOT_FOUND',
}

// Errors that can be thrown: <code, string>
// 10100, UNKNOWN_ERROR, Unknown error fetching property.
// 10101, PROPERTY_NOT_FOUND, provided propertyKey is not found.

/**
 * Gets the name of the current block.
 * @public
 * @returns {Promise<string>} The name of the block
 * @throws {Error} if unknown error occurs
 * @throws {Error} If property of the name is not found
 * 
 * ```js
 * import { getBlockName } from '@myjsblock/sdk'
 * 
 * const myProperty = await getBlockName()
 * //or
 * getBlockName().then(property => {
 *   console.log(property)
 * })
 * 
 * ```
 */
const getBlockName = (): Promise<GetBlockNameResult> => 
  callRemoteFunction<GetBlockNameResult, GetBlockNameErrors>(Function.getProperty, { 
    name: 'caption'
  })

export default getBlockName