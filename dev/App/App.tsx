import { StrictMode } from 'react'
import ReactDOM from 'react-dom'
import 'virtual:windi.css'

import FunctionList from './components/FunctionList'

function App() {
  return (
    <main className='p-6 h-full'>
      <header>
        <h1 className='text-xl mb-4'>
          Functions
        </h1>
      </header>
      <section>
        <FunctionList />
      </section>
    </main>
  )
}

ReactDOM.render(
  <StrictMode>
    <App/>
  </StrictMode>,
  document.getElementById('app')
)
