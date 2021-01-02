import React from 'react'
import { useSetRecoilState } from 'recoil'

import { BasicButton } from '@/components/nucleon/buttons/BasicButton'
import { articleEditorStatusAtom } from '@/store/articleForm'

export const ArticlePreviewButton = () => {
  const setArticleEditorStatus = useSetRecoilState(articleEditorStatusAtom)

  const togglePreview = () =>
    setArticleEditorStatus((v) => ({ ...v, showPreview: !v.showPreview }))

  return (
    <BasicButton onClick={togglePreview} title="Toggle Preview Mode">
      preview
    </BasicButton>
  )
}
