import React from 'react'

import { NormalText } from '@/components/nucleon/texts'

type Props = {
  text: string
}

export const LoginFormLabel: AtomicDesign.Atom<Props> = ({ text }) => {
  return <NormalText>{text}</NormalText>
}
