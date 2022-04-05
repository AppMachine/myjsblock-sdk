import { callRemoteFunction } from "../../messenging"
import { FunctionName } from "../../messenging/callRemoteFunction"

interface GetRecordsResult <DataResponse> {
  data: DataResponse[]
}

enum GetRecordsErrors {
  UNKNOWN_ERROR = 'UNKNOWN_ERROR',
  ERROR_FETCH_WEBSERVICE = 'ERROR_FETCH_WEBSERVICE',
  MISSING_CONTEXT = 'MISSING_CONTEXT'
}

/**
 * Returns the records form the data web service context.
 * @returns {Array} of items from a web-service.
 * @throws {Error} if fetching the web-service fails
 */
const getRecords = <DataResponse = unknown[]>(): Promise<GetRecordsResult<DataResponse>> =>
  callRemoteFunction<GetRecordsResult<DataResponse>, GetRecordsErrors>(
    FunctionName.getRecords,
  )

export default getRecords