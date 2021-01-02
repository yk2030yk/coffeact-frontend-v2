import { useCallback } from 'react'
import { useRecoilValue } from 'recoil'

import { articleSelector } from '@/store/articleForm'
import { useAsyncTask } from '@/hooks/store/task/useAsyncTask'
import { useArticleApiService } from '@/hooks/store/service/useApiService'
import { TASKS } from '@/constants/tasks'

export const useUpdateArticle = () => {
  const article = useRecoilValue(articleSelector)
  const articleService = useArticleApiService()

  return useAsyncTask({
    taskName: TASKS.UPDATE_ARTICLE,
    callback: useCallback(async () => {
      await articleService.update(article.id, article)
    }, [article, articleService]),
  })
}
