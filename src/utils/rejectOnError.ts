interface MessageErrorData {
  error?: MyJsBlockSDKError
}

/**
 * Checks if error exists on data object and rejects the error.
 * @param event @type MessageEvent<MessageErrorData>
 * @param reject @type PromiseConstructor['reject']
 */
const rejectOnError = <PostMessageResponse extends MessageEvent<MessageErrorData>>(
  reject: (reason?: unknown) => void,
  event?: PostMessageResponse,
) => {
  if (!event?.data) {
    const error = new Error('No data returned')
    error.name = 'NO_DATA'
    reject(error)
  }
  if (event?.data?.error) {
    const {code, message } = event.data.error
    const error = new Error(message)
    error.name = code

    reject(error)
  }
}

export default rejectOnError