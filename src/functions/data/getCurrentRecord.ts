import { callRemoteFunction } from '../../messaging'
import { ArgumentErrors, ContextErrors, UnknownErrors } from '../../types/BridgeErrors'
import BridgeFunction from '../../types/BridgeFunction'

export type GetCurrentRecordResult <DataResponse> = DataResponse

/**
 * Get the current record from the current data web service context
 * @public
 * @returns {Promise<unknown>} Promise with the requested data object
 * @throws {Error} If an unknown error occurs
 * @throws {Error} If function is not called in a detail block context
 */
const getCurrentRecord = <DataResponse = unknown>(): Promise<GetCurrentRecordResult<DataResponse>> =>
  callRemoteFunction<GetCurrentRecordResult<DataResponse>, UnknownErrors & ArgumentErrors & ContextErrors>(
    BridgeFunction.getCurrentRecord,
  )

export default getCurrentRecord
