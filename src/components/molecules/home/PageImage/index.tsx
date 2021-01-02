import React from 'react'

import { PageImageBackground, PageImageText } from '@/components/atoms/home'
import * as S from './styled'

export const PageImage: React.FC = () => {
  return (
    <S.Wrapper>
      <PageImageBackground />
      <S.TextPosition>
        <PageImageText />
      </S.TextPosition>
      <S.Overlay />
    </S.Wrapper>
  )
}
