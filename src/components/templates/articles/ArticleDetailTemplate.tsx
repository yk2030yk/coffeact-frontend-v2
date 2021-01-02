import React from 'react'

import { CommonLayout } from '@/components/layouts/globals/CommonLayout'
import { ArticleDetailContent } from '@/components/organisms/article'
import * as S from './styled'

export const ArticleDetailTemplate: React.FC = () => {
  return (
    <CommonLayout>
      <S.ArticleDetailArea>
        <ArticleDetailContent />
      </S.ArticleDetailArea>
    </CommonLayout>
  )
}
