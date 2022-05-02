import { callRemoteFunction } from '../../messaging'
import BridgeFunction from '../../types/BridgeFunction'

interface GetRecordsResult <DataResponse> {
  data: DataResponse[]
}

enum GetRecordsErrors {
  UNKNOWN_ERROR = 'UNKNOWN_ERROR',
  ERROR_FETCH_WEBSERVICE = 'ERROR_FETCH_WEBSERVICE',
  MISSING_CONTEXT = 'MISSING_CONTEXT'
}

/**
 * Returns the records from the data context
 * @returns {Promise<GetRecordsResult<DataResponse>>} Promise of items from the data context
 * @throws {Error} if unknown error occurs
 * @throws {Error} If an unknown error occurs
 * @throws {Error} If fetching the web-service fails
 */
const getRecords = <DataResponse = unknown[]>(): Promise<GetRecordsResult<DataResponse>> =>
  callRemoteFunction<GetRecordsResult<DataResponse>, GetRecordsErrors>(
    BridgeFunction.getRecords,
  )

export default getRecords
