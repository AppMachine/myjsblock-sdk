import { callRemoteFunction } from "../../messenging";
import { FunctionName } from "../../messenging/callRemoteFunction";

type GetCurrentRecordResult <DataResponse> = DataResponse

enum GetCurrentRecordErrors {
  UNKNOWN_ERROR = 'UNKNOWN_ERROR',
  FETCH_DATA_ERROR = 'FETCH_DATA_ERROR'
}

/**
 * Returns the current record form data web service context.
 * @returns {Promise<unknown>}
 */
const getCurrentRecord = <DataResponse = unknown>(): Promise<GetCurrentRecordResult<DataResponse>> => 
  callRemoteFunction<GetCurrentRecordResult<DataResponse>, GetCurrentRecordErrors>(
    FunctionName.getCurrentRecord,
  )

export default getCurrentRecord