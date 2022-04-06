import { FormEventHandler } from "react"
import { FunctionOption } from "../functions"
import Button from "./Button"
import Collapse from "./Collapse"

interface FunctionListitemProps extends FunctionOption {
  name: string
}

const FunctionListitem = ({ name, args = [], callFunction, description, hide }: FunctionListitemProps) => {
  const onSubmit: FormEventHandler = (event) => {
    event.preventDefault()
    const inputValues = 
      Array
      .from((event.target as unknown) as HTMLInputElement[])
      .filter(({nodeName }) => nodeName === 'INPUT')
      .map(({name: argName, value}) => [argName, value])
    
      inputValues.forEach(([argName, value]) => {
        localStorage.setItem(`${name}-${argName}`, value)
      })
    
    if(!callFunction) return

    if (inputValues.length === 1) {
      const [,argument] = inputValues[0]
      callFunction(argument).then((response: unknown) => {
        if(response) {
          console.log(response)
        }
      })
    } else {
      const args = inputValues.map(([, value]) => value)
      callFunction(...args).then((response: unknown) => {
        if(response) {
          console.log(response)
        }
      })
    }
  }

  if (hide) {
    return null
  }

  return (
    <li className="mb-4">
      <Collapse name={name}>
        <form onSubmit={onSubmit}>
          { Boolean(description?.length) && (
            <p>
              {description}
            </p>
          ) }
          { args.filter(({hide}) => !hide).map(({ value, name: argName }) => (
            <fieldset key={argName} className="mb-2">
              
              <label htmlFor={`${name}-${argName}`} className="block mb-2 font-bold text-gray-700">
                {argName}
              </label>
              <input 
                type="text"
                defaultValue={localStorage.getItem(`${name}-${argName}`) ?? String(value)}
                id={`${name}-${argName}`}
                name={argName}
                className="py-2 px-4 rounded-md"
              />
            </fieldset>
          ))}
          <Button type="submit" disabled={!callFunction}>Call</Button>
        </form>
      </Collapse>
    </li>
  )
}

export default FunctionListitem