import callRemoteFunction, { FunctionName } from "../../messenging/callRemoteFunction";

type GetPropertyResult = string

enum GetPropertyErrors {
  UNKNOWN_ERROR = 'UNKNOWN_ERROR',
  PROPERTY_NOT_FOUND = 'PROPERTY_NOT_FOUND',
  INVALID_ARGUMENTS = 'INVALID_ARGUMENTS'
}

// Errors that can be thrown: <code, string>
// 10100, UNKNOWN_ERROR, Unknown error fetching property.
// 10101, PROPERTY_NOT_FOUND, provided propertyKey is not found.

/**
 * @name getProperty
 * @description Gets the given propertyName from the current block.
 * @param {string} name
 * @returns {Promise<string>} The value of the property
 * @public
 * 
 * ```js
 * import { getProperty } from '@myjsblock/sdk'
 * 
 * const myProperty = await getProperty('myProperty')
 * //or
 * getProperty('caption').then(property => {
 *   console.log(property)
 * })
 * 
 * ```
 */
const getProperty = (name: string): Promise<GetPropertyResult> => 
  callRemoteFunction<GetPropertyResult, GetPropertyErrors>(FunctionName.getProperty, { 
    name
  })

export default getProperty