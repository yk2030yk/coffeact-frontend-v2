import React from 'react'

import { AdminArticleDetailTemplate } from '@/components/templates/admin/articles/AdminArticleDetailTemplate'
import { useSetDefaultValue } from '@/hooks/store/articleForm/useArticleField'
import { useRouteParams } from '@/hooks/utils/useParams'
import { useArticleDetailPage } from '@/hooks/store/articleDetail/useArticleDetailPage'

export const AdminArticleDetailPage: React.FC = () => {
  const { articleId } = useRouteParams<'articleId'>(['articleId'])
  useArticleDetailPage(articleId)
  useSetDefaultValue(articleId)
  return <AdminArticleDetailTemplate />
}
