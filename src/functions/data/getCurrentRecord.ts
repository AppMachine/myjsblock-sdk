import { callRemoteFunction } from '../../messaging'
import BridgeFunction from '../../types/BridgeFunction'

type GetCurrentRecordResult <DataResponse> = DataResponse

enum GetCurrentRecordErrors {
  UNKNOWN_ERROR = 'UNKNOWN_ERROR',
  MISSING_CONTEXT = 'MISSING_CONTEXT'
}

/**
 * Get the current record from the current data web service context
 * @public
 * @returns {Promise<unknown>} Promise with the requested data object
 * @throws {Error} If an unknown error occurs
 * @throws {Error} If function is not called in a detail block context
 */
const getCurrentRecord = <DataResponse = unknown>(): Promise<GetCurrentRecordResult<DataResponse>> =>
  callRemoteFunction<GetCurrentRecordResult<DataResponse>, GetCurrentRecordErrors>(
    BridgeFunction.getCurrentRecord,
  )

export default getCurrentRecord
