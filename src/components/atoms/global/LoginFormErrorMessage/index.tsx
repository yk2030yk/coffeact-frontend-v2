import React from 'react'

import { theme } from '@/styles'
import { NormalText } from '@/components/nucleon/texts'

type Props = {
  message: string
}

export const LoginFormErrorMessage: React.FC<Props> = ({ message }) => {
  return <NormalText color={theme.color.fusionRed}>{message}</NormalText>
}
