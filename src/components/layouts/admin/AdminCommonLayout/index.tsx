import React from 'react'

import {
  AdminHeader,
  AdminFooter,
  AdminSidebarMenu,
} from '@/components/organisms/admin'
import * as S from './styled'

type Props = {}

export const AdminCommonLayout: React.FC<Props> = ({ children }) => (
  <S.Wrapper>
    <S.LeftArea>
      <S.SidebarMenuArea>
        <AdminSidebarMenu />
      </S.SidebarMenuArea>
    </S.LeftArea>
    <S.RightArea>
      <S.TopContent>
        <AdminHeader />
      </S.TopContent>
      <S.MainContent>{children}</S.MainContent>
      <S.BottomContent>
        <AdminFooter />
      </S.BottomContent>
    </S.RightArea>
  </S.Wrapper>
)
