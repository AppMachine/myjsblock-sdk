import { MessageType, onMessage, postMessage } from "../utils/messenger";
import rejectOnError from "../utils/rejectOnError";

export interface ShowAlertMessageResponse {
  success: boolean
  error?: MyJsBlockSDKError
}

// Errors that can be thrown: <code, string>
// 10100, Unknown error showing the alert.

const showAlertMessage = (content: string): Promise<void> => 
  new Promise((resolve, reject) => {
    onMessage<ShowAlertMessageResponse>(MessageType.ShowAlertMessage, (event) => {
      rejectOnError(reject, event)

      if (event.data.success) {
        resolve()
      }
    });

    postMessage({
      type: MessageType.ShowAlertMessage,
      data: { content },
    })
})

export default showAlertMessage