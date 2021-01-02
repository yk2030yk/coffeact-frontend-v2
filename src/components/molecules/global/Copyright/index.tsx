import React from 'react'

import { CopyrightText } from '@/components/atoms/global'
import * as S from './styled'

export const Copyright: AtomicDesign.Molecule<{}> = () => {
  return (
    <S.Wrapper>
      <CopyrightText />
    </S.Wrapper>
  )
}
