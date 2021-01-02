import React from 'react'
import { theme } from '@/styles'

import { SmallText } from '@/components/nucleon/texts'

type Props = {}

export const CopyrightText: AtomicDesign.Atom<Props> = () => {
  return (
    <SmallText color={theme.color.white}>
      Copyright © 2020 Takahiro Negishi. All Rights Reserved.
    </SmallText>
  )
}
