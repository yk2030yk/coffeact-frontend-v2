import { useAsyncTask } from '@/hooks/store/task/useAsyncTask'
import { TASKS } from '@/constants/tasks'
import { useFetchNextArticleList } from './useFetchArticleList'

export const useFetchNextArticleListTask = () => {
  return useAsyncTask({
    taskName: TASKS.fetchArticleList,
    callback: useFetchNextArticleList(),
  })
}
