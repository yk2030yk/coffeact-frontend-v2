import React from 'react'
import { useRecoilValue } from 'recoil'

import { articleEditorStatusAtom } from '@/store/articleForm'
import { EditableArticle, PreviewArticle } from '@/components/molecules/article'
import * as S from './styled'

export const ArticleDetailContent: React.FC = () => {
  const articleEditorStatus = useRecoilValue(articleEditorStatusAtom)
  return (
    <S.Wrapper>
      {articleEditorStatus.showPreview ? (
        <PreviewArticle />
      ) : (
        <EditableArticle />
      )}
    </S.Wrapper>
  )
}
