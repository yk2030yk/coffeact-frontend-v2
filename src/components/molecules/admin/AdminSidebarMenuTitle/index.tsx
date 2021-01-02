import React from 'react'

import { SidebarMenuTitle } from '@/components/atoms/admin'
import * as S from './styled'

type Props = {}

export const AdminSidebarMenuTitle: AtomicDesign.Molecule<Props> = () => {
  return (
    <S.Wrapper>
      <SidebarMenuTitle text="CoffeeAct" />
    </S.Wrapper>
  )
}
