import { callRemoteFunction } from '../../messaging'
import { UnknownErrors } from '../../types/BridgeErrors'
import BridgeFunction from '../../types/BridgeFunction'

interface GetUserInfoResult {
  /**
   * ID unique to this device
   */
  deviceId?: string
  /**
   * Account ID if the user signed in
   */
  applicationAccountId?: string
  /**
   * ID of the current user which may belong to a signed in account
   */
  applicationUserId: string
  /**
   * Email address the user used to sign in
   */
  email?: string
  /**
   * Authorization level
   */
  authorizationLevel: 'Unauthorized' | 'Authorized' | 'Customer' | 'Employee' | 'Manager' | 'Boss' | 'AppMachine'
}

/**
 * Get information about the current user
 *
 * @public
 * @returns {Promise<GetUserInfoResult>} Promise with the user info
 */
const getUserInfo = (): Promise<GetUserInfoResult> =>
  callRemoteFunction<GetUserInfoResult, UnknownErrors>(BridgeFunction.getUserInfo)

export default getUserInfo
