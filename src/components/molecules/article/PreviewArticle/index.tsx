import React from 'react'

import { ArticleDetail } from '../ArticleDetail'
import { useArticle } from '@/hooks/store/articleForm/useArticleField'

export const PreviewArticle: React.FC = () => {
  const article = useArticle()
  return <ArticleDetail article={article} />
}
