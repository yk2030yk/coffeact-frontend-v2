import React from 'react'

import { HeaderStart, HeaderSearch } from '@/components/molecules/global'
import * as S from './styled'

export const CommonHeader: React.FC = () => {
  return (
    <S.Header>
      <HeaderStart />
      <HeaderSearch />
    </S.Header>
  )
}
