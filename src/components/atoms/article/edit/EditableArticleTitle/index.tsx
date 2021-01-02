import React from 'react'

import { ArticleEditFormInput } from '@/components/atoms/article'
import { useTitleField } from '@/hooks/store/articleForm/useArticleField'
import * as S from './styled'

export const EditableArticleTitle: React.FC = () => {
  const fieldProps = useTitleField()
  return (
    <S.Wrapper>
      <ArticleEditFormInput {...fieldProps} />
    </S.Wrapper>
  )
}
