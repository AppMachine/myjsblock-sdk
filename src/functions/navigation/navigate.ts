import { callRemoteFunction } from '../../messaging'
import BridgeFunction from '../../types/BridgeFunction'

enum GoToBlockErrors {
  UNKNOWN_ERROR = 'UNKNOWN_ERROR',
  VARIABLE_NAME_NOT_FOUND = 'VARIABLE_NAME_NOT_FOUND'
}

export type NavigateProperties = Record<string, unknown>

/**
 * Will navigate to a block matching the given block id.
 * @public
 * @param   {String}    variableName The identifier of the block, this can be the caption, variable name or id.
 * @throws  {Error}     If the block identifier is not of type string or is undefined.
 */
const navigate = (variableName: string, properties: NavigateProperties): Promise<void> =>
  callRemoteFunction<void, GoToBlockErrors>(BridgeFunction.navigate, {
    variableName,
    properties,
  })

export default navigate
