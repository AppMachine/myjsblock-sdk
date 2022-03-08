import { MessageType, onMessage, postMessage } from "../utils/messenger";
import rejectOnError from "../utils/rejectOnError";

interface GetCurrentRecordResult <DataResponse> {
  item: DataResponse
  error?: MyJsBlockSDKError
}

const getCurrentRecord = <DataResponse = unknown>() => new Promise((resolve, reject) => {
  onMessage<GetCurrentRecordResult<DataResponse>>(MessageType.GetCurrentRecord, (event) => {
    rejectOnError(reject, event)

    // TODO: Extra code parsing code..
    
    resolve(event.data)
  });

  postMessage({
    type: MessageType.GetCurrentRecord,
  })
})

export default getCurrentRecord