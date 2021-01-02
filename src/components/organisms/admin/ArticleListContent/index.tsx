import React from 'react'

import { ArticleList, NextButton } from '@/components/molecules/article'
import { routes } from '@/components/routes'
import * as S from './styled'

export const ArticleListContent: React.FC = () => {
  return (
    <S.Wrapper>
      <ArticleList
        createPath={(article) =>
          routes.ArticleDetailPage.getPath({ articleId: article.id })
        }
      />
      <NextButton />
    </S.Wrapper>
  )
}
