import React from 'react'

import { AdminEditorLayout } from '@/components/layouts/admin/AdminEditorLayout'
import { ArticleDetailContent } from '@/components/organisms/admin'
import { ArticleEyecatchImageModal } from '@/components/organisms/article'

export const AdminArticleDetailTemplate: React.FC = () => {
  return (
    <>
      <AdminEditorLayout>
        <ArticleDetailContent />
      </AdminEditorLayout>
      <ArticleEyecatchImageModal />
    </>
  )
}
