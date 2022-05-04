import { callRemoteFunction } from '../../messaging'
import { UnknownErrors, ArgumentErrors, ContextErrors } from '../../types/BridgeErrors'
import BridgeFunction from '../../types/BridgeFunction'

interface GetRecordsResult <DataResponse> {
  data: DataResponse[]
}

enum GetRecordsErrors {
  WEBSERVICE_ERRORS = 'WEBSERVICE_ERRORS',
}

/**
 * Returns the records from the data context
 * @returns {Promise<GetRecordsResult<DataResponse>>} Promise of items from the data context
 * @throws {Error} if unknown error occurs
 * @throws {Error} If an unknown error occurs
 * @throws {Error} If fetching the web-service fails
 */
const getRecords = <DataResponse = unknown[]>(): Promise<GetRecordsResult<DataResponse>> =>
  callRemoteFunction<GetRecordsResult<DataResponse>,  UnknownErrors & ArgumentErrors & ContextErrors & GetRecordsErrors>(
    BridgeFunction.getRecords,
  )

export default getRecords
