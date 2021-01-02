import React from 'react'

import { ArticleDetailTemplate } from '@/components/templates/articles/ArticleDetailTemplate'
import { useArticleDetailPage } from '@/hooks/store/articleDetail/useArticleDetailPage'
import { useRouteParams } from '@/hooks/utils/useParams'

export const ArticleDetailPage: React.FC = () => {
  const { articleId } = useRouteParams<'articleId'>(['articleId'])
  useArticleDetailPage(articleId)
  return <ArticleDetailTemplate />
}
