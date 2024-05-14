import './style.css'

import { getUserInfo } from '@myjsblock/sdk'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <h1>device id:</h1>
    <span id="device-id"></span>

    <h1>UserInfo</h1>
    <span id="user-info"></span>

  </div>
`

getUserInfo().then((userInfo) => {
  document.querySelector('#device-id')!.innerHTML = userInfo.deviceId || 'null';
  document.querySelector('#user-info')!.innerHTML = JSON.stringify(userInfo, null, 2);
})


