import React from 'react'

import {
  AdminHeaderTitle,
  HeaderButtonGroup,
} from '@/components/molecules/admin'

import * as S from './styled'

export const AdminHeader: React.FC = () => {
  return (
    <S.Header>
      <AdminHeaderTitle />
      <HeaderButtonGroup />
    </S.Header>
  )
}
