import React from 'react'

import { LoginFormErrorMessage } from '@/components/atoms/global'
import { useLoginErrorMessage } from './hooks'

type Props = {}

export const LoginErrorMessage: React.FC<Props> = () => {
  const message = useLoginErrorMessage()
  return <LoginFormErrorMessage message={message || ''} />
}
