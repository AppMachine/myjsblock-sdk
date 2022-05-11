import './style.css'
import { showLoader, hideLoader } from '@myjsblock/sdk'

const loadingButton = document.getElementById('loading-button')

const onClick = async () => {
  await showLoader()

  await new Promise((resolve) => { setTimeout(resolve, 2000) })
  await hideLoader()
}

loadingButton.addEventListener('click', onClick)
