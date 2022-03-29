import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import 'virtual:windi.css'

import { getProperty } from '../../src/functions'

function App() {
  const [count, setCount] = useState(0)

  return (
    <main className='p-6 h-full'>
      <header>
        <h1 className='text-xl'>
          Functions
        </h1>
      </header>
      <section>
        <button
          className="border border-red-400 rounded px-4 py-2 mt-4 hover:(bg-teal-400 border-teal-400) bg-red-400"
          onClick={() => getProperty('caption')}
        >
          getProperty
        </button>
      </section>
    </main>
  )
}

ReactDOM.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>,
  document.getElementById('app')
)

function setCount(arg0: (count: any) => any): void {
  throw new Error('Function not implemented.')
}
