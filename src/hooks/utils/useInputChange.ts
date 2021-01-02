import { useState, useCallback } from 'react'

export const useInputChange = (): any => {
  const [value, setValue] = useState<string>('')

  const handleChange = useCallback((e: any) => setValue(e.target.value), [])

  return [value, handleChange, setValue]
}
