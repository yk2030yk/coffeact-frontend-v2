import React from 'react'

import { useFetchNextArticleListTask } from '@/hooks/store/articleList/useFetchArticleListTask'
import { useArticleListState } from '@/hooks/store/articleList/useArticleListState'

export const NextButton: React.FC = () => {
  const { run } = useFetchNextArticleListTask()
  const { hasNext } = useArticleListState()
  return <>{hasNext && <div onClick={() => run()}>more</div>}</>
}
