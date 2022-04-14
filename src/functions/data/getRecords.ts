import { callRemoteFunction } from "../../messaging"
import { Function } from "../../types/function";

interface GetRecordsResult <DataResponse> {
  data: DataResponse[]
}

enum GetRecordsErrors {
  UNKNOWN_ERROR = 'UNKNOWN_ERROR',
  ERROR_FETCH_WEBSERVICE = 'ERROR_FETCH_WEBSERVICE',
  MISSING_CONTEXT = 'MISSING_CONTEXT'
}

/**
 * Returns the records form the data context
 * @returns {Array} Promise of items from the data context
 * @throws {Error} if unknown error occurs
 * @throws {Error} if fetching the web-service fails
 * @throws {Error} if function is not called in a data context
 */
const getRecords = <DataResponse = unknown[]>(): Promise<GetRecordsResult<DataResponse>> =>
  callRemoteFunction<GetRecordsResult<DataResponse>, GetRecordsErrors>(
    Function.getRecords,
  )

export default getRecords