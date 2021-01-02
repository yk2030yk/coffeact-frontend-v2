import React from 'react'

import { H1 } from '@/components/nucleon/texts'

type Props = {
  title: string
}

export const ArticleDetailTitle: React.FC<Props> = ({ title }) => {
  return <H1 bold>{title}</H1>
}
