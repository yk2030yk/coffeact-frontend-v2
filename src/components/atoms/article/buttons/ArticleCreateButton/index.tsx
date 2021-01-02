import React, { useCallback } from 'react'
import { useHistory } from 'react-router-dom'

import { routes } from '@/components/routes'
import { BasicButton } from '@/components/nucleon/buttons/BasicButton'
import { useCreateArticle } from '@/hooks/store/articleForm/useCreateArticle'

type Props = {}

export const ArticleCreateButton: React.FC<Props> = () => {
  const history = useHistory()

  const success = useCallback(
    (articleId: string) => {
      history.push(routes.AdminArticleDetailPage.getPath({ articleId }))
    },
    [history]
  )

  const { run } = useCreateArticle(success)

  return <BasicButton onClick={run}>create</BasicButton>
}
