import callRemoteFunction, { FunctionName } from "../../messenging/callRemoteFunction";

interface GetPropertyResult {
	name: string;
}

enum GetPropertyErrors {
  UNKNOWN_ERROR = 'UNKNOWN_ERROR',
  PROPERTY_NOT_FOUND = 'PROPERTY_NOT_FOUND'
}

// Errors that can be thrown: <code, string>
// 10100, UNKNOWN_ERROR, Unknown error fetching property.
// 10101, PROPERTY_NOT_FOUND, provided propertyKey is not found.

const getProperty = (name: string): Promise<GetPropertyResult> => 
  callRemoteFunction<GetPropertyResult, GetPropertyErrors>(FunctionName.getProperty, { 
    name
  })

export default getProperty