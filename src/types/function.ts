export enum Function {
  /* Core */
  getProperty = 'getProperty',
  getImageUrl = 'getImageUrl',
  showLoader = 'showLoader',
  hideLoader = 'hideLoader',

  /* Data */
  getRecords = 'getRecords',
  getCurrentRecord = 'getCurrentRecord',
  setCurrentRecordById = 'setCurrentRecordById',
  // setCurrentRecord = 'setCurrentRecord',

  /* Notification */
  showAlert = 'showAlert',

  /* Navigation */
  goBack = 'goBack',
  navigateToBlock = 'navigateToBlock',
  navigateToDetail = 'navigateToDetail'
}