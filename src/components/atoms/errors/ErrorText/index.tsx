import React from 'react'

import { theme } from '@/styles'
import { NormalText } from '@/components/nucleon/texts'

type Props = {
  text: string
}

export const ErrorText: React.FC<Props> = ({ text }) => {
  return <NormalText color={theme.color.white}>{text}</NormalText>
}
