import { callRemoteFunction } from "../../messenging";
import { FunctionName } from "../../messenging/callRemoteFunction";
interface GetCurrentRecordResult <DataResponse> {
  item: DataResponse
  error?: MyJsBlockSDKError
}

enum GetCurrentRecordErrors {
  
}

// const getCurrentRecord = <DataResponse = unknown>() => new Promise((resolve, reject) => {
//   const requestId = uid()

//   onMessage<GetCurrentRecordResult<DataResponse>>(
//     requestId, 
//     (event) => {
//     rejectOnError(reject, event)

//     // TODO: Extra code parsing code..
    
//     resolve(event.data)
//   });

//   postMessage({
//     functionName: FunctionName.getCurrentRecord,
//     id: requestId,
//   })
// })

// export default getCurrentRecord

const getCurrentRecord = <DataResponse = unknown>(): Promise<GetCurrentRecordResult<DataResponse>> => 
  callRemoteFunction<GetCurrentRecordResult<DataResponse>, GetCurrentRecordErrors>(
    FunctionName.getCurrentRecord,
  )

export default getCurrentRecord