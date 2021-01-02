import React from 'react'

import { BasicButton } from '@/components/nucleon/buttons'

type Props = {
  text: string
  onClick: () => void
}

export const LoginFormButton: AtomicDesign.Atom<Props> = ({
  text,
  onClick,
}) => {
  return <BasicButton onClick={onClick}>{text}</BasicButton>
}
