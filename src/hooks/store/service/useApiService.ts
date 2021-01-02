import { useRecoilValue } from 'recoil'

import { apiServiceAtom } from '@/store/service'

export const useApiServices = () => {
  return useRecoilValue(apiServiceAtom)
}

export const useArticleApiService = () => useApiServices().ARTICLE
