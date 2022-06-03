import { callRemoteFunction } from '../../messaging'
import { UnknownErrors, ArgumentErrors, ContextErrors } from '../../types/BridgeErrors'
import BridgeFunction from '../../types/BridgeFunction'

export type GetRecordsResult<DataType> = DataType[]

enum GetRecordsErrors {
  MISSING_CONTEXT = 'MISSING_CONTEXT',
  WEBSERVICE_ERROR = 'WEBSERVICE_ERROR',
}

/**
 * Returns the records from the data context
 * @argument {String} variableName Variable of a block, if none specified the current webservice is used
 * @argument {Record<String, unknown>} parameters Parameters for webservice
 * @returns {Promise<GetRecordsResult<DataResponse>>} Promise of items from the data context
 * @throws {Error} if unknown error occurs
 * @throws {Error} If an unknown error occurs
 * @throws {Error} If fetching the web-service fails
 */
const getRecords = <DataType = unknown>(
  variableName?: string,
  parameters?: Record<string, unknown>,
): Promise<GetRecordsResult<DataType>> =>
    callRemoteFunction<GetRecordsResult<DataType>, UnknownErrors & ArgumentErrors & ContextErrors & GetRecordsErrors>(
      BridgeFunction.getRecords,
      {
        variableName,
        parameters,
      },
    )

export default getRecords
