export enum Function {
  /* Core */
  getBlockName = 'getBlockName', // This should be getProperty 
  getProperty = 'getProperty',
  getImageUrl = 'getImageUrl',
  showLoader = 'showLoader',
  hideLoader = 'hideLoader',

  /* Data */
  getRecords = 'getRecords',
  getCurrentRecord = 'getCurrentRecord',
  setCurrentRecordById = 'setCurrentRecordById',

  /* Notification */
  showAlert = 'showAlert',

  /* Navigation */
  goBack = 'goBack',
  navigate = 'navigate',

  /* Media */
  pickImage = 'pickImage'
}