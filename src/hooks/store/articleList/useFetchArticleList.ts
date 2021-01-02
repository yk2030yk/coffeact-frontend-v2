import { useCallback } from 'react'
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil'

import {
  articleListAtomFamily,
  articleStateAtom,
  articleListLastItemSelector,
} from '@/store/articleList'
import { useArticleApiService } from '@/hooks/store/service/useApiService'

export const useFetchNextArticleList = () => {
  const articleService = useArticleApiService()
  const [articleListState, setArticleListState] = useRecoilState(
    articleStateAtom
  )
  const setArticleList = useSetRecoilState(
    articleListAtomFamily(articleListState.count)
  )
  const lastItem = useRecoilValue(articleListLastItemSelector)

  return useCallback(async () => {
    const articleList = await articleService.getPagingList(lastItem?.id)
    setArticleList(articleList)
    setArticleListState((v) => ({
      ...v,
      count: v.count + 1,
      hasNext: articleList && articleList.length > 0,
    }))
  }, [setArticleList, lastItem, setArticleListState, articleService])
}
