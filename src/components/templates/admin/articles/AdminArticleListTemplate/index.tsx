import React from 'react'

import { AdminCommonLayout } from '@/components/layouts/admin/AdminCommonLayout'
import { ArticleListContent } from '@/components/organisms/admin/ArticleListContent'
import * as S from './styled'

export const AdminArticleListTemplate: React.FC = () => {
  return (
    <AdminCommonLayout>
      <S.ArticleListArea>
        <ArticleListContent />
      </S.ArticleListArea>
    </AdminCommonLayout>
  )
}
