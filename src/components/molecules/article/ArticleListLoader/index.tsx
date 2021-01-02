import React from 'react'

import { ArticleCardLoader } from '@/components/atoms/article'
import * as S from './styled'

export const ArticleListLoader: AtomicDesign.Molecule<{ count?: number }> = ({
  count = 9,
}) => {
  return (
    <S.CardList>
      {[...Array(count).keys()].map((index) => (
        <ArticleCardLoader key={index} />
      ))}
    </S.CardList>
  )
}
