import React from 'react'

import { ArticleCard } from '../ArticleCard'
import { Article } from '@/models/store/Article'
import { useArticleList } from '@/hooks/store/articleList/useArticleList'
import { useArticleListState } from '@/hooks/store/articleList/useArticleListState'
import * as S from './styled'

type Props = {
  index: number
  createPath: (article: Article) => string
}

export const ArticleListItems: AtomicDesign.Molecule<Props> = ({
  index,
  createPath,
}) => {
  const articles = useArticleList(index)
  return (
    <>
      {articles.map((article) => (
        <ArticleCard
          key={article.id}
          article={article}
          to={createPath(article)}
        />
      ))}
    </>
  )
}

export const ArticleList: AtomicDesign.Molecule<{
  createPath: (article: Article) => string
}> = ({ createPath }) => {
  const { count } = useArticleListState()
  return (
    <S.CardList>
      {[...Array(count).keys()].map((index) => (
        <ArticleListItems
          key={`articleList-${index}`}
          index={index}
          createPath={createPath}
        />
      ))}
    </S.CardList>
  )
}
