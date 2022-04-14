import callRemoteFunction from '../../messaging/callRemoteFunction'
import MyJsBlockFunction from '../../types/function'

type GetPropertyResult = string

enum GetPropertyErrors {
  UNKNOWN_ERROR = 'UNKNOWN_ERROR',
  PROPERTY_NOT_FOUND = 'PROPERTY_NOT_FOUND',
  INVALID_ARGUMENTS = 'INVALID_ARGUMENTS'
}

/**
 * Gets the given propertyName from the current block.
 * @public
 * @param {string} name
 * @returns {Promise<string>} The value of the property
 * @throws {Error} If unknown error occurs
 * @throws {Error} If given `name` parameter is not found
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
  callRemoteFunction<GetPropertyResult, GetPropertyErrors>(MyJsBlockFunction.getProperty, {
    name,
  })

export default getProperty
