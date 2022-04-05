import callRemoteFunction, { FunctionName } from "../../messenging/callRemoteFunction"

type SetCurrentRecordByIdResult = void

enum SetCurrentRecordByIdErrors {

}
/**
 * Set current record by record id.
 * @public
 * @param {string} recordId 
 * @returns {Promise<unknown>} Promise
 */
const setCurrentRecordById = (recordId: string): Promise<SetCurrentRecordByIdResult> => 
  callRemoteFunction<SetCurrentRecordByIdResult, SetCurrentRecordByIdErrors>(
    FunctionName.setCurrentRecordById, 
    {
      recordId
    }
  )

export default setCurrentRecordById