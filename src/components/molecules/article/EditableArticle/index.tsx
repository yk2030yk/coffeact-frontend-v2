import React from 'react'

import {
  EditableArticleEyecatchImage,
  EditableArticleTitle,
  EditableArticleContent,
} from '@/components/atoms/article'
import * as S from './styled'

export const EditableArticle: React.FC = () => {
  return (
    <S.Wrapper>
      <S.Item>
        <EditableArticleEyecatchImage />
      </S.Item>
      <S.Item>
        <EditableArticleTitle />
      </S.Item>
      <S.Item>
        <EditableArticleContent />
      </S.Item>
    </S.Wrapper>
  )
}
