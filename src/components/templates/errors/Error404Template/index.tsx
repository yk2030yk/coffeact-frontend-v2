import React from 'react'

import { CommonLayout } from '@/components/layouts/globals/CommonLayout'
import { Error404Content } from '@/components/organisms/errors'

export const Error404Template: React.FC = () => {
  return (
    <CommonLayout>
      <Error404Content />
    </CommonLayout>
  )
}
