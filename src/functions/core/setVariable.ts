interface GetVariableResult {
  key: string,
  value: any
}

/**
 * Allows you to store a variable in the block scope.
 * @param variableName
 * @param newValue
 * @returns {Promise<{ key: string, value: any }>}
 * @throws {Error} If no valid key has been specified.
 * @throws {Error} If no valid value has been specified.
 */
export default async function setVariable(variableName: string, newValue: any): Promise<GetVariableResult> {
  throw Error('To Be Implemented');
}
