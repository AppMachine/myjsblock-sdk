import { callRemoteFunction } from "../../messenging";
import { FunctionName } from "../../messenging/callRemoteFunction";

enum GoToBlockErrors {
  UNKNOWN_ERROR = 'UNKNOWN_ERROR'
}

/**
 * Will navigate to a building block matching the given block identifier.
 * @public
 * @param   {String}    blockIdentifier The identifier of the building block, this can be the caption, variable name or id.
 * @throws  {Error}     If the block identifier is not of type string or is undefined.
 */
const goToBlock = (blockId: string): Promise<void> => 
  callRemoteFunction<void, GoToBlockErrors>(FunctionName.goToBlock, {
    blockId
  })

export default goToBlock