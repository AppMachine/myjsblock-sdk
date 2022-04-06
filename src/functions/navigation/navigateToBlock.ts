import { callRemoteFunction } from "../../messenging";
import { Function } from "../../types/function";

enum GoToBlockErrors {
  UNKNOWN_ERROR = 'UNKNOWN_ERROR',
  BLOCK_ID_NOT_FOUND = 'BLOCK_ID_NOT_FOUND'
}

/**
 * Will navigate to a building block matching the given block identifier.
 * @public
 * @param   {String}    blockId The identifier of the building block, this can be the caption, variable name or id.
 * @throws  {Error}     If the block identifier is not of type string or is undefined.
 */
const navigateToBlock = (blockId: string): Promise<void> => 
  callRemoteFunction<void, GoToBlockErrors>(Function.navigateToBlock, {
    blockId
  })

export default navigateToBlock