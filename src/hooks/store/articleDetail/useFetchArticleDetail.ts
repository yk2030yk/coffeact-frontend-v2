import { useCallback } from 'react'
import { useSetRecoilState } from 'recoil'

import { articleDetailAtomFamily } from '@/store/articleDetail'
import { useArticleApiService } from '@/hooks/store/service/useApiService'
import { Article } from '@/models/store/Article'

export const useFetchArticleDetail = (id: Article['id']) => {
  const setArticle = useSetRecoilState(articleDetailAtomFamily(id))
  const articleService = useArticleApiService()

  return useCallback(async () => {
    const article = await articleService.get(id)
    if (article) setArticle(article)
  }, [articleService, setArticle, id])
}
