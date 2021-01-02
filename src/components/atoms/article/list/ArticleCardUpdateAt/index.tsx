import React from 'react'

import { SmallText } from '@/components/nucleon/texts'

type Props = {
  updatedAt: string
}

export const ArticleCardUpdateAt: React.FC<Props> = ({ updatedAt }) => {
  return <SmallText>{updatedAt}</SmallText>
}
