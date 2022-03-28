// import { FunctionName, onMessage, postMessage } from "../utils/messenger";
// import rejectOnError from "../utils/rejectOnError";
// import uid from "../utils/uid";

// interface GetCurrentRecordResult <DataResponse> {
//   item: DataResponse
//   error?: MyJsBlockSDKError
// }

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