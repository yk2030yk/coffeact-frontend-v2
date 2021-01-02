import React from 'react'

import { ArticleCreateButton } from '@/components/atoms/article/buttons/ArticleCreateButton'
import * as S from './styled'

type Props = {}

export const HeaderButtonGroup: AtomicDesign.Molecule<Props> = () => {
  return (
    <S.Wrapper>
      <ArticleCreateButton />
    </S.Wrapper>
  )
}
