import { callRemoteFunction } from '../../messaging'
import MyJsBlockFunction from '../../types/function'

enum GoToBlockErrors {
  UNKNOWN_ERROR = 'UNKNOWN_ERROR',
  BLOCK_ID_NOT_FOUND = 'BLOCK_ID_NOT_FOUND'
}

export type NavigateProperties = Record<string, unknown>

/**
 * Will navigate to a building block matching the given block id.
 * @public
 * @param   {String}    variableName The identifier of the building block, this can be the caption, variable name or id.
 * @throws  {Error}     If the block identifier is not of type string or is undefined.
 */
const navigate = (variableName: string, properties: NavigateProperties): Promise<void> =>
  callRemoteFunction<void, GoToBlockErrors>(MyJsBlockFunction.navigate, {
    variableName,
    properties,
  })

export default navigate
