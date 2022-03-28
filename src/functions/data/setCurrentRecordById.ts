// import { MessageType, onMessage, postMessage } from "../utils/messenger";
// import rejectOnError from "../utils/rejectOnError";

// export interface SetCurrentResponse {
//   success: true
//   error?: MyJsBlockSDKError
// }

// const setCurrentRecordById = (recordId: string) => 
//   new Promise((resolve, reject) => {
//     onMessage<SetCurrentResponse>(MessageType.SetCurrentRecord, (event) => {
//       rejectOnError(reject, event)
      
//       resolve(event.data)
//     });

//     postMessage({
//       type: MessageType.SetCurrentRecord,
//       data: { recordId }
//     })
//   })


// export default setCurrentRecordById