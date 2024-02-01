import { useEffect, useState } from 'react'

export function useLocalStorage<T>(
  key: string,
  initialValue: T,
): [value: T, setValue: (value: T) => void] {
  const [value, setValue] = useState<T>(() => {
    const data = localStorage.getItem(`base.${key}`)
    if (data) {
      try {
        return JSON.parse(data) as T
      } catch {
        localStorage.setItem(key, JSON.stringify(initialValue))
        return initialValue
      }
    } else return initialValue
  })

  useEffect(() => {
    localStorage.setItem(`base.${key}`, JSON.stringify(value))
  }, [value])

  return [value, setValue]
}
