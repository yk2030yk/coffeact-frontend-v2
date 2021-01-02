import React from 'react'

import { LatestArticleListTitle } from '@/components/molecules/home'
import { ArticleList } from '@/components/molecules/article'
import { routes } from '@/components/routes'
import * as S from './styled'

export const LatestArticleContent: React.FC = () => {
  return (
    <S.Wrapper>
      <S.TitleArea>
        <LatestArticleListTitle />
      </S.TitleArea>
      <S.ArticleListArea>
        <ArticleList
          createPath={(article) =>
            routes.ArticleDetailPage.getPath({ articleId: article.id })
          }
        />
      </S.ArticleListArea>
    </S.Wrapper>
  )
}
