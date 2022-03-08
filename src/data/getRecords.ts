import { PaginationOptions, PaginationType } from '../types/pagination';
import { onMessage, postMessage, MessageType } from '../utils/messenger';
import rejectOnError from '../utils/rejectOnError';

interface DataSourceOption {
  dataTableId?: string
  webServiceId?: string
}

interface GetRecordsResult <DataResponse> {
  paginationType: PaginationType,
  paginationOptions: PaginationOptions
  items: DataResponse[]
  error?: MyJsBlockSDKError
}

// Errors that can be thrown: <code, string>
// UNKWOWN_TABLE_ERROR, 10100, Unknown data table error. (douche putje)
// ERROR_FETCH_WEBSERVICE, 10101, Error fetching data from webservice.
// DATA_DABLE_ID_NOT_FOUND, 10102, provided DataTableId is not found.
// WEB_SERVICE_ID_NOT_FOUND, 10103, provided WebServiceID is not found.
// PAGINATION_TYPE_NOT_SUPPORTED, 10104, Requested pagination type is not supported on this data type.

/**
 * 
 * @param dataSource 
 * @param paginationOptions 
 * @returns @type Promise<GetRecordsResult<DataResponse>>
 */
const getRecords = <DataResponse = unknown>(
  dataSource: DataSourceOption,
  paginationOptions?: PaginationOptions,
): Promise<GetRecordsResult<DataResponse>> => new Promise((resolve, reject) => {
    onMessage<GetRecordsResult<DataResponse>>(MessageType.GetRecords, (event) => {
      rejectOnError(reject, event)

      // TODO: Extra code parsing code..
      
      resolve(event.data)
    });

    postMessage({
      type: MessageType.GetRecords,
      data: dataSource,
      ...(paginationOptions ? { paginationOptions }: {})
    })
  });


export default getRecords