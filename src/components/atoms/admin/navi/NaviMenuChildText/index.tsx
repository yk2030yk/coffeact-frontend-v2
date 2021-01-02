import React from 'react'

import { theme } from '@/styles'
import { SmallText } from '@/components/nucleon/texts'

type Props = {
  text: string
}

export const NaviMenuChildText: AtomicDesign.Atom<Props> = ({ text }) => {
  return <SmallText color={theme.color.white}>{text}</SmallText>
}
