import callRemoteFunction from '../../messaging/callRemoteFunction'
import { ArgumentErrors, UnknownErrors } from '../../types/BridgeErrors'
import BridgeFunction from '../../types/BridgeFunction'

interface ShowAlertResult {
  clicked: string[]
}

/**
 * Shows Alert Message
 * @public
 * @param {String} title The title of the alert message
 * @param {String} message The message of the alert message.
 * @param {Array.<String>} buttons An array of string containing the name of the buttons, these values will be shown in the return value
 * @returns {String} The name of the button that was pressed in the alert message.
 * @throws {Error} If the title parameter is empty
 * @throws {Error} If the buttons parameter is empty
 */
const showAlert = (title: string, message = '', buttons: string[] = ['OK']): Promise<ShowAlertResult> =>
  callRemoteFunction<ShowAlertResult, UnknownErrors & ArgumentErrors>(BridgeFunction.showAlert, {
    title,
    message,
    buttons,
  })

export default showAlert
