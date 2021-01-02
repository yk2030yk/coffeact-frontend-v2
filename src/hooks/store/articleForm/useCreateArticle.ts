import { useCallback } from 'react'
import { useRecoilValue } from 'recoil'

import { articleSelector } from '@/store/articleForm'
import { useArticleApiService } from '@/hooks/store/service/useApiService'
import { useAsyncTask } from '@/hooks/store/task/useAsyncTask'
import { TASKS } from '@/constants/tasks'

export const useCreateArticle = (callback?: (id: string) => void) => {
  const article = useRecoilValue(articleSelector)
  const articleService = useArticleApiService()

  return useAsyncTask({
    taskName: TASKS.CREATE_ARTICLE,
    callback: useCallback(async () => {
      const id = await articleService.create(article)
      if (callback) callback(id)
    }, [article, articleService, callback]),
  })
}
