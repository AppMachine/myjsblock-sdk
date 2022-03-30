import callRemoteFunction, { FunctionName } from "../../messenging/callRemoteFunction";

enum ShowAlertMessageErrors {
  UNKNOWN_ERROR = 'UNKNOWN_ERROR', // Unknown error fetching property.
  CONTENT_EMPTY = 'CONTENT_EMPTY' // Provided content is empty.
}

// Errors that can be thrown: <code, string>
// 10100, UNKNOWN_ERROR, Unknown error fetching property.
// 10101, PROPERTY_NOT_FOUND, provided propertyKey is not found.

const showAlertMessage = (
  title: string, message = '', options: string[] = ['ok']
): Promise<void> => 
  callRemoteFunction<void, ShowAlertMessageErrors>(FunctionName.showAlertMessage, { 
    title,
    message,
    options
  })

export default showAlertMessage