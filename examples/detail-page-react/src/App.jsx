import { useState, useEffect } from 'react'
import { getCurrentRecord } from '@myjsblock/sdk'

import './App.css'

function App() {
  const [shop, setShop] = useState()

  useEffect(() => {
    getCurrentRecord().then((data) => {
      setShop(data)
    })
  }, [])

  if (!shop) {
    return null
  }

  return (
    <div className="App">
      <article className="shop">
        <img src={shop.image} alt={shop.name} />
        <h1>{shop.name}</h1>
        <p className="price">{shop.website}</p>
        <p className="info">{shop.city}</p>
      </article>
    </div>
  )
}

export default App
