import { useRecoilValue } from 'recoil'

import { articleDetailAtomFamily } from '@/store/articleDetail'
import { Article } from '@/models/store/Article'

export const useArticleDetail = (id: Article['id']) => {
  return useRecoilValue(articleDetailAtomFamily(id))
}
