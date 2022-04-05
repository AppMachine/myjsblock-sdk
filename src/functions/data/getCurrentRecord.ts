import { callRemoteFunction } from "../../messenging";
import { Function } from "../../types/function";

type GetCurrentRecordResult <DataResponse> = DataResponse

enum GetCurrentRecordErrors {
  UNKNOWN_ERROR = 'UNKNOWN_ERROR',
  FETCH_DATA_ERROR = 'FETCH_DATA_ERROR',
  MISSING_CONTEXT = 'MISSING_CONTEXT'
}

/**
 * Returns the current record form data web service context.
 * @public
 * @returns {Promise<unknown>} Promise with the requested data object
 * @throws {Error} if unknown error occurs
 * @throws {Error} if fetching the web-service fails
 * @throws {Error} if function is not called in a data context
 */
const getCurrentRecord = <DataResponse = unknown>(): Promise<GetCurrentRecordResult<DataResponse>> => 
  callRemoteFunction<GetCurrentRecordResult<DataResponse>, GetCurrentRecordErrors>(
    Function.getCurrentRecord,
  )

export default getCurrentRecord