/* eslint-disable max-len */
import { ReactNode } from "react"
import useLocalStorageState from "../hooks/useLocalStorageState"

interface CollapseProps {
  name: string
  children: ReactNode
}

const Collapse = ({ name, children }: CollapseProps) => {
  const [open, toggle] = useLocalStorageState(false, `collapsed-${name}`, true)
  return (
    <div className={`text p-3 rounded-lg ${
      open ? 'bg-cool-gray-300' : 'bg-cool-gray-400'
    }`}>
      <header className="select-none cursor-pointer inline-flex  before::self-center before:(self-center
 border-t-0 border-r-2 border-b-2 border-l-0 border-solid inline-block p-1)"
        onClick={() => toggle()}>
        <h2 className="text-lg font-mono">{name}</h2>
      </header>
      {open && (
        <div className="mt-2">
          {children}
        </div>
      )}
    </div>
  )
}

export default Collapse