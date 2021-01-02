import React from 'react'

import { theme } from '@/styles'
import { MiddleText } from '@/components/nucleon/texts'

type Props = {
  title: string
}

export const HomeTitle: React.FC<Props> = ({ title }) => {
  return (
    <MiddleText bold color={theme.color.white}>
      {title}
    </MiddleText>
  )
}
