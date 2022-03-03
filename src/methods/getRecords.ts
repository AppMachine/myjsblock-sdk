import { PaginationOptions, PaginationType } from '../types/pagination';
import { onMessage, postMessage, MessageType } from '../utils/messenger';

interface DataSourceOption {
  dataTableId?: string
  webServiceId?: string
}

interface GetRecordsResult <DataResponse> {
  paginationType: PaginationType,
  paginationOptions: PaginationOptions
  data: DataResponse[]
}

// Errors that can be thrown: <code, string>
// UNKWOWN_TABLE_ERROR, 10100, Unknown data table error. (douche putje)
// ERROR_FETCH_WEBSERVICE, 10101, Error fetching data from webservice.
// DATA_DABLE_ID_NOT_FOUND, 10102, provided DataTableId is not found.
// WEB_SERVICE_ID_NOT_FOUND, 10103, provided WebServiceID is not found.
// PAGINATION_TYPE_NOT_SUPPORTED, 10104, Requested pagination type is not supported on this data type.

const getRecords = <DataResponse>(
  dataSource: DataSourceOption,
  paginationOptions?: PaginationOptions,
): Promise<GetRecordsResult<DataResponse>> => new Promise((resolve, reject) => {
    onMessage(MessageType.GET_RECORDS, (event) => {
      if (event.data.error) {
        const {code, message} = event.data.error
        const error = new Error(message)
        error.name = code

        reject(error)
      }

      resolve(event.data);
    });

    postMessage({
      type: MessageType.GET_RECORDS,
      data: dataSource,
      ...(paginationOptions ? { paginationOptions }: {})
    })
  });


export default getRecords