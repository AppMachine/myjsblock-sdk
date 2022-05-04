import callRemoteFunction from '../../messaging/callRemoteFunction'
import { ArgumentErrors, UnknownErrors } from '../../types/BridgeErrors'
import BridgeFunction from '../../types/BridgeFunction'

type GetPropertyResult = string

/**
 * Get the given propertyName from the current block.
 * @public
 * @param {string} name
 * @returns {Promise<string>} The value of the property
 * @throws {Error} If unknown error occurs
 * @throws {Error} If given `name` property is not found
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
  callRemoteFunction<GetPropertyResult, UnknownErrors & ArgumentErrors>(BridgeFunction.getProperty, {
    name,
  })

export default getProperty
