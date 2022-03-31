import { useEffect, useState } from 'react'
import { JSONTree } from 'react-json-tree';

const theme = {
  scheme: 'monokai',
  author: 'wimer hazenberg (http://www.monokai.nl)',
  base00: '#272822',
  base01: '#383830',
  base02: '#49483e',
  base03: '#75715e',
  base04: '#a59f85',
  base05: '#f8f8f2',
  base06: '#f5f4f1',
  base07: '#f9f8f5',
  base08: '#f92672',
  base09: '#fd971f',
  base0A: '#f4bf75',
  base0B: '#a6e22e',
  base0C: '#a1efe4',
  base0D: '#66d9ef',
  base0E: '#ae81ff',
  base0F: '#cc6633',
};

const Playground = () => {
  console.log(navigator);
  const [response, setResponse] = useState(undefined)

  const handleMessage = (event: MessageEvent) => {
    console.log(event);

    if(typeof event.data === 'string') {
      const response = JSON.parse(event.data)

      setResponse(response)
    }
  }

  useEffect(()=>{
    addEventListener('message', handleMessage)

    return () => {
      removeEventListener('message', handleMessage)
    }
  },[])
  
  return (
    <main className="w-screen h-screen overflow-hidden">
      <header className="p-3 shadow-2 w-full flex-basis shadow-gray-300 shadow-md relative">
        <h2 className="font-bold">Playground</h2>
      </header>
      <div className="flex w-screen h-screen">
      
      <section className="flex-1 bg-gray-200">
        <iframe src={`/App/index.html`} width="100%" height="100%" />
      </section>
      <section className="flex-1 p-6">
        <header>
          <h1 className='text-xl'>Request</h1>
        </header>
        <JSONTree 
          theme={theme}
          data={'true'}
        />
      </section>
      </div>
    </main>
  )
}

export default Playground