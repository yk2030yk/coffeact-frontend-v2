import React from 'react'

import { MiddleText } from '@/components/nucleon/texts'

type Props = {
  text: string
}

export const HeaderTitle: AtomicDesign.Atom<Props> = ({ text }) => {
  return (
    <MiddleText bold color="#fff">
      {text}
    </MiddleText>
  )
}
