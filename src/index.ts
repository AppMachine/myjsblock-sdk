export function add(a, b) {
  return a + b;
}


interface GetVariableResult {
  key: string,
  value: any
}

/**
 * @public
 * Allows you to retrieve a variable from the block scope.
 * @param  {string} variableName
 * @returns {PromiseLike<{ key: string, value: any }>}
 * @throws  {Error} If no valid key has been specified.
 */
export function getVariable(variableName: string): Promise<GetVariableResult> {
  throw Error('To Be Implemented')
}

/**
 * Allows you to store a variable in the block scope.
 * @param variableName 
 * @param newValue 
 * @returns {PromiseLike<{ key: string, value: any }>}
 * @throws  {Error} If no valid key has been specified.
 * @throws  {Error} If no valid value has been specified.
 */
export function setVariable(variableName: string, newValue: any): Promise<GetVariableResult> {
  throw Error('To Be Implemented')
}


/**
 * @public
 * Allows you to show the native loader overlay
 */
export function showLoader() { }

/**
 * @public
 * Allows you to hide the native loader overlay
 */
export function hideLoader() { }


/**
 * Share content using the Native share functionality from your iOS / Android or Web Browser
 * @param variableName 
 * @param newValue 
 * @returns {PromiseLike<{ key: string, value: any }>}
 * @throws  {Error} If no valid key has been specified.
 * @throws  {Error} If no valid value has been specified.
 */
export function shareContent(content: string, imageUrls?: [string], subject?: string) {}




/**
 * @public
 * Allows you to get an image url based on an image id
 * @param {string} imageid 
 * @returns {PromiseLike<string>}
 * @throws  {Error} If no valid imageId has been specified.
 */
export function getImageUrl(imageid: string): Promise<string> {
  throw Error('To Be Implemented')
}

/**
 * @public
 * Will go back to the parent block of this javascript block.
 */
export function goBack(): void {
  throw Error('To Be Implemented')
}

/**
 * @public
 * Will navigate to a building block matching the given block identifier.
 * @param   {String}    blockIdentifier The identifier of the building block, this can be the caption, variable name or id.
 * @throws  {Error}     If the block identifier is not of type string or is undefined.
 */
export function goToBlock(blockIdentifier: string): void {
  throw Error('To Be Implemented')
}

