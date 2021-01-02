import { useEffect } from 'react'

import { Article } from '@/models/store/Article'
import { useFetchArticleDetailTask } from './useFetchArticleDetailTask'

export const useArticleDetailPage = (id: Article['id']) => {
  const { run } = useFetchArticleDetailTask(id)

  useEffect(() => {
    run()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
}
