import callRemoteFunction, { FunctionName } from "../../messenging/callRemoteFunction"

interface SetCurrentRecordByIdResult {
  
}

enum SetCurrentRecordByIdErrors {

}
/**
 * Set current record by record id.
 * @public
 * @param {string} recordId 
 * @returns {Promise<unknown>}
 */
const setCurrentRecordById = (recordId: string): Promise<SetCurrentRecordByIdResult> => 
  callRemoteFunction<SetCurrentRecordByIdResult, SetCurrentRecordByIdErrors>(
    FunctionName.setCurrentRecordById, 
    {
      recordId
    }
  )

export default setCurrentRecordById