import { useCallback, useEffect, useState } from 'react'
import { useRecoilValue } from 'recoil'

import { storageServiceAtom } from '@/store/service'

export const useStorageService = () => {
  return useRecoilValue(storageServiceAtom)
}

export const usePutImage = () => {
  const service = useStorageService()
  return useCallback(
    async (path: string, blob: Blob) => {
      await service.put(path, blob)
    },
    [service]
  )
}

export const useDeleteImage = () => {
  const service = useStorageService()
  return useCallback(
    async (path: string) => {
      await service.delete(path)
    },
    [service]
  )
}

export const useGetDownloadUrl = (defaultImageUrl: string) => {
  const service = useStorageService()
  return useCallback(
    async (path: string) => {
      try {
        return await service.getDownloadURL(path)
      } catch (e) {
        return defaultImageUrl
      }
    },
    [service, defaultImageUrl]
  )
}

export const useDownloadUrl = (path: string) => {
  const [isLoaded, setIsLoaded] = useState<boolean>(false)
  const [url, setUrl] = useState<string>('')
  const getDownloadUrl = useGetDownloadUrl('')

  useEffect(() => {
    const fetch = async () => {
      try {
        const u = await getDownloadUrl(path)
        setUrl(u)
      } catch (e) {
        //
      }
      setIsLoaded(true)
    }
    fetch()
  }, [path, getDownloadUrl])

  return { url, isLoaded }
}
