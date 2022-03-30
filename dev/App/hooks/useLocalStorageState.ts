import { useCallback, useState } from "react"

const useLocalStorageState = (initialValue: any, localStorageKey: string) => {
  const [state, setState] = useState(() => {
    const localStorageValue = localStorage.getItem(localStorageKey)

    if (localStorageValue == null || localStorageValue?.length === 0) {
      return initialValue
    }

    if (localStorageValue?.startsWith('{')) {
      return JSON.parse(localStorageValue)
    } else {
      return localStorageValue
    }
    
  })

  const updateState = useCallback((newState) => {
    localStorage.setItem(localStorageKey, newState)
    setState(newState)
  }, [])

  return [state, updateState]
}

export default useLocalStorageState