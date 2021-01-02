import React from 'react'

import { HomeTemplate } from '@/components/templates/globals/HomeTemplate'
import { useArticleListPage } from '@/hooks/store/articleList/useArticleListPage'

export const HomePage: React.FC = () => {
  useArticleListPage()
  return <HomeTemplate />
}
