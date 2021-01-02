import React from 'react'

import { CommonHeader, CommonFooter } from '@/components/organisms/global'
import * as S from './styled'

export const CommonLayout: React.FC = ({ children }) => (
  <S.Wrapper>
    <S.TopContent>
      <CommonHeader />
    </S.TopContent>
    <S.MainContent>{children}</S.MainContent>
    <S.BottomContent>
      <CommonFooter />
    </S.BottomContent>
  </S.Wrapper>
)
