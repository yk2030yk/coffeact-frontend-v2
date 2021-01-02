import { useCallback } from 'react'
import { useRecoilValue } from 'recoil'

import { articleSelector } from '@/store/articleForm'
import { useAsyncTask } from '@/hooks/store/task/useAsyncTask'
import { useDeleteImage } from '@/hooks/store/service/useStorageService'
import { useArticleApiService } from '@/hooks/store/service/useApiService'
import { TASKS } from '@/constants/tasks'

export const useDeleteArticle = () => {
  const article = useRecoilValue(articleSelector)
  const articleService = useArticleApiService()
  const deleteImage = useDeleteImage()

  return useAsyncTask({
    taskName: TASKS.DELETE_ARTICLE,
    callback: useCallback(async () => {
      await deleteImage(article.eyecatchImage)
      await articleService.delete(article.id)
    }, [article, articleService, deleteImage]),
  })
}
