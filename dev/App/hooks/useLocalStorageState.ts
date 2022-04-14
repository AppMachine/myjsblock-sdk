import { useCallback, useState } from 'react'

const useLocalStorageState = (initialValue: any, localStorageKey: string, toggle = false) => {
  const [state, setState] = useState(() => {
    const localStorageValue = localStorage.getItem(localStorageKey)

    if (localStorageValue == null || localStorageValue?.length === 0) {
      return initialValue
    }

    try {
      const parsedValue = JSON.parse(localStorageValue)
      return parsedValue
    } catch (e) {
      return localStorageValue
    }
  })

  const updateState = useCallback((newState) => {
    if (toggle) {
      setState((oldState: boolean) => {
        const newValue = !oldState

        localStorage.setItem(localStorageKey, String(newValue))

        return newValue
      })
    } else {
      localStorage.setItem(localStorageKey, String(newState))
      setState(newState)
    }
  }, [toggle])

  return [state, updateState]
}

export default useLocalStorageState
