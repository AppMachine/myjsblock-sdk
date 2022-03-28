import useFunction, { FunctionName } from "../../messenging/useFunction";

interface GetPropertyResult {
	propertyKey: string;
}

enum GetPropertyErrors {
  UNKNOWN_ERROR = 'UNKNOWN_ERROR',
  PROPERTY_NOT_FOUND = 'PROPERTY_NOT_FOUND'
}

// Errors that can be thrown: <code, string>
// 10100, UNKNOWN_ERROR, Unknown error fetching property.
// 10101, PROPERTY_NOT_FOUND, provided propertyKey is not found.

const getProperty = (propertyKey: string): Promise<GetPropertyResult> => 
  new Promise((resolve, reject) => {
    useFunction<GetPropertyResult, GetPropertyErrors>(FunctionName.getProperty, 
    { 
      propertyKey
    }, (response) => {
      if ('error' in response) {
        const error = new Error(response.message)
        error.name = response.error

        if('traceId' in response) {
          error.message =  `${error.message}, traceId: ${response.traceId}`
        }
    
        reject(error)
      } else {
        resolve(response.value)
      }      
    })
})

export default getProperty