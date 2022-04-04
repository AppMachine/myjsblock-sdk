import { useMemo } from 'react'
import functions from '../functions'
import FunctionListitem from './FunctionListItem'

const FunctionList = () => {
  const functionsElements = useMemo(() => (
    Object.entries(functions).map(
      ([functionName, functionOptions]) => (
        <FunctionListitem name={functionName} {...functionOptions} key={functionName}/>
      )
    )
  ), [])

  return (
    <ul>
      {functionsElements}
    </ul>
  )
}

export default FunctionList