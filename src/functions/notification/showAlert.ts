import callRemoteFunction from '../../messaging/callRemoteFunction'
import BridgeFunction from '../../types/BridgeFunction'

interface ShowAlertResult {
  clicked: string[]
}

enum ShowAlertErrors {
  UNKNOWN_ERROR = 'UNKNOWN_ERROR', // Unknown error fetching property.
  TITLE_IS_EMPTY = 'TITLE_IS_EMPTY', //  title parameter is empty
  NO_BUTTONS_PROVIDED = 'NO_BUTTONS_PROVIDED' // Provided content is empty.
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
const showAlert = (title: string, message = '', buttons: string[] = ['ok']): Promise<ShowAlertResult> =>
  callRemoteFunction<ShowAlertResult, ShowAlertErrors>(BridgeFunction.showAlert, {
    title,
    message,
    buttons,
  })

export default showAlert
