import React from 'react'

import { ArticleEditFormTextarea } from '@/components/atoms/article'
import { useContentField } from '@/hooks/store/articleForm/useArticleField'
import * as S from './styled'

export const EditableArticleContent: React.FC = () => {
  const field = useContentField()
  return (
    <S.Wrapper>
      <ArticleEditFormTextarea {...field} />
    </S.Wrapper>
  )
}
