import React from 'react'

import { AdminEditorHeader } from '@/components/organisms/admin'
import * as S from './styled'

type Props = {}

export const AdminEditorLayout: React.FC<Props> = ({ children }) => (
  <S.Wrapper>
    <S.TopContent>
      <AdminEditorHeader />
    </S.TopContent>
    <S.MainContent>{children}</S.MainContent>
  </S.Wrapper>
)
