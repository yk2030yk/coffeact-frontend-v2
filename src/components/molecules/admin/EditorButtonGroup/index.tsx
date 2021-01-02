import React from 'react'

import { ArticleUpdateButton } from '@/components/atoms/article/buttons/ArticleUpdateButton'
import { ArticlePreviewButton } from '@/components/atoms/article/buttons/ArticlePreviewButton'
import * as S from './styled'

type Props = {}

export const EditorButtonGroup: AtomicDesign.Molecule<Props> = () => {
  return (
    <S.Wrapper>
      <ArticleUpdateButton />
      <ArticlePreviewButton />
    </S.Wrapper>
  )
}
