import callRemoteFunction from '../../messaging/callRemoteFunction'
import MyJsBlockFunction from '../../types/function'

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
    MyJsBlockFunction.setCurrentRecordById,
    {
      recordId,
    },
  )

export default setCurrentRecordById
