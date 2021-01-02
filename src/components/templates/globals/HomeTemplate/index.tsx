import React from 'react'

import { CommonLayout } from '@/components/layouts/globals/CommonLayout'
import { HeadContent, LatestArticleContent } from '@/components/organisms/home'
import * as S from './styled'

export const HomeTemplate: React.FC = () => {
  return (
    <CommonLayout>
      <div>
        <HeadContent />
      </div>
      <S.LatestArticleArea>
        <LatestArticleContent />
      </S.LatestArticleArea>
    </CommonLayout>
  )
}
