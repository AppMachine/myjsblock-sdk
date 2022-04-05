import callRemoteFunction from "../../messenging/callRemoteFunction"
import { Function } from "../../types/function";

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
    Function.setCurrentRecordById, 
    {
      recordId
    }
  )

export default setCurrentRecordById