import React from 'react'

import { BasicButton } from '@/components/nucleon/buttons/BasicButton'
import { useUpdateArticle } from '@/hooks/store/articleForm/useUpdateArticle'

export const ArticleUpdateButton = () => {
  const { run } = useUpdateArticle()
  return (
    <BasicButton onClick={run} title="Save Article">
      save
    </BasicButton>
  )
}
