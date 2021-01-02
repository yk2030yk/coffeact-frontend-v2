import React from 'react'
import { useSetRecoilState } from 'recoil'

import { articleEditorStatusAtom } from '@/store/articleForm'
import { useUpdateArticle } from '@/hooks/store/articleForm/useUpdateArticle'
import * as S from './styled'

const PreviewButton = () => {
  const setArticleEditorStatus = useSetRecoilState(articleEditorStatusAtom)

  const togglePreview = () =>
    setArticleEditorStatus((v) => ({ ...v, showPreview: !v.showPreview }))

  return (
    <S.Item onClick={togglePreview} title="Toggle Preview Mode">
      preview
    </S.Item>
  )
}

const UpdateButton = () => {
  const { run, state } = useUpdateArticle()
  return (
    <S.Item
      onClick={run}
      disabled={state.type === 'started'}
      title="Save Article"
    >
      save
    </S.Item>
  )
}

export const ArticleEditorMenu: React.FC = () => {
  return (
    <S.Menu>
      <S.MenuContent>
        <PreviewButton />
        <UpdateButton />
      </S.MenuContent>
    </S.Menu>
  )
}
