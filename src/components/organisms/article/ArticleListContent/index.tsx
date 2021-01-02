import React from 'react'

import {
  ArticleList,
  ArticleListTitle,
  NextButton,
} from '@/components/molecules/article'
import { routes } from '@/components/routes'
import * as S from './styled'

export const ArticleListContent: React.FC = () => {
  return (
    <S.Wrapper>
      <S.TitleArea>
        <ArticleListTitle />
      </S.TitleArea>
      <S.ArticleListArea>
        <ArticleList
          createPath={(article) =>
            routes.ArticleDetailPage.getPath({ articleId: article.id })
          }
        />
      </S.ArticleListArea>
      <div>
        <NextButton />
      </div>
    </S.Wrapper>
  )
}
