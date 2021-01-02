import { useRecoilValue } from 'recoil'

import { articleListAtomFamily } from '@/store/articleList'

export const useArticleList = (index: number) => {
  return useRecoilValue(articleListAtomFamily(index))
}
