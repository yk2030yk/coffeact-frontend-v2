import { useAsyncTask } from '@/hooks/store/task/useAsyncTask'
import { TASKS } from '@/constants/tasks'
import { useFetchArticleDetail } from './useFetchArticleDetail'
import { Article } from '@/models/store/Article'

export const useFetchArticleDetailTask = (id: Article['id']) => {
  return useAsyncTask({
    taskName: TASKS.fetchArticle,
    callback: useFetchArticleDetail(id),
  })
}
