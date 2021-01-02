import React from 'react'

import { AdminHeaderTitle } from '@/components/molecules/admin'
import { EditorButtonGroup } from '@/components/molecules/admin/EditorButtonGroup'

import * as S from './styled'

export const AdminEditorHeader: React.FC = () => {
  return (
    <S.Header>
      <AdminHeaderTitle />
      <EditorButtonGroup />
    </S.Header>
  )
}
