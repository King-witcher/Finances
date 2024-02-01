import { useMemo } from 'react'
import { useLocation } from 'react-router-dom'

export function useQueryParam(param: string) {
  const { search } = useLocation()
  return useMemo(() => {
    const urlSearchParams = new URLSearchParams(search)
    return urlSearchParams.get(param)
  }, [search, param])
}
