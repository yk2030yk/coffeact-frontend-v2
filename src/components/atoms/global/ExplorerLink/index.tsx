import React from 'react'
import { Link } from 'react-router-dom'

import { theme } from '@/styles'
import { NormalText } from '@/components/nucleon/texts'

type Props = {
  to: string
  text: string
}

export const ExplorerLink: AtomicDesign.Molecule<Props> = ({ to, text }) => {
  return (
    <Link to={to}>
      <NormalText color={theme.color.white}>{text}</NormalText>
    </Link>
  )
}
