enum BridgeFunction {
  /* Core */
  getBlockName = 'getBlockName', // This should be getProperty
  getProperty = 'getProperty',
  getImageUrl = 'getImageUrl',
  showLoader = 'showLoader',
  hideLoader = 'hideLoader',

  /* Data */
  getRecords = 'getRecords',
  getCurrentRecord = 'getCurrentRecord',
  // setCurrentRecordById = 'setCurrentRecordById',

  /* Notification */
  showAlert = 'showAlert',
  showDialog = 'showDialog',

  /* Navigation */
  goBack = 'goBack',
  navigate = 'navigate',

  /* Media */
  pickImage = 'pickImage',

  /* User */
  getUserInfo = 'getUserInfo',
}

export default BridgeFunction
