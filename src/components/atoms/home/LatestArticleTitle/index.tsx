import React from 'react'

import { theme } from '@/styles'
import { NormalText } from '@/components/nucleon/texts'

type Props = {
  title: string
}

export const LatestArticleTitle: React.FC<Props> = ({ title }) => {
  return (
    <NormalText color={theme.color.blackCat} bold>
      {title}
    </NormalText>
  )
}
