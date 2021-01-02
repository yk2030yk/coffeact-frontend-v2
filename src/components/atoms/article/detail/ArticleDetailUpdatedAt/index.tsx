import React from 'react'

import { NormalText } from '@/components/nucleon/texts'

type Props = {
  updatedAt: string
}

export const ArticleDetailUpdatedAt: React.FC<Props> = ({ updatedAt }) => {
  return <NormalText bold>{updatedAt}</NormalText>
}
