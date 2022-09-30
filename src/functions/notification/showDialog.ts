import callRemoteFunction from '../../messaging/callRemoteFunction'
import { ArgumentErrors, UnknownErrors } from '../../types/BridgeErrors'
import BridgeFunction from '../../types/BridgeFunction'

/**
 * Shows Dialog with simple options
 * @public
 * @param {String} title The title of the dialog
 * @param {Array.<String>} options An array of string containing the options, these values will be used as the return value
 * @returns {String} The value of the option that was pressed in the dialog.
 * @throws {Error} If the title parameter is empty
 * @throws {Error} If the options parameter is empty
 */
const showDialog = (title: string, options: string[]): Promise<string> =>
  callRemoteFunction<string, UnknownErrors & ArgumentErrors>(BridgeFunction.showDialog, {
    title,
    options,
  })

export default showDialog
