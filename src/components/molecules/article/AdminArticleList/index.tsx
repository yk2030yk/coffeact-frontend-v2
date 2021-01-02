import React from 'react'

import { ArticleCard } from '../ArticleCard'
import { Article } from '@/models/store/Article'
import * as S from './styled'

type Props = {
  articles: Article[]
  getPath: (article: Article) => string
}

export const ArticleList: React.FC<Props> = ({ articles, getPath }) => {
  return (
    <S.CardList>
      {articles.map((article) => (
        <ArticleCard key={article.id} article={article} to={getPath(article)} />
      ))}
    </S.CardList>
  )
}
