import { useEffect, useState } from "react"

export default function useLocalStorage(key, initialValue) {
  const [value, setValue] = useState(() => {
    const saved = localStorage.getItem(key)   // look in storage
    if (saved) {
      return JSON.parse(saved)                // text back into an array
    }
    return initialValue                       // nothing saved? use the start value
  })

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value))   // save it as text
  }, [key, value])                                     // save again when either changes

  return [value, setValue]
}
