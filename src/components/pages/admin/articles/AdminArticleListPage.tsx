import React from 'react'

import { AdminArticleListTemplate } from '@/components/templates/admin/articles/AdminArticleListTemplate'
import { useArticleListPage } from '@/hooks/store/articleList/useArticleListPage'

export const AdminArticleListPage: React.FC = () => {
  useArticleListPage()
  return <AdminArticleListTemplate />
}
