import React, { ComponentProps } from 'react'

import { BasicButton as NucleonBasicButton } from '@/components/nucleon/buttons'

type Props = {
  text: string
} & ComponentProps<typeof NucleonBasicButton>

export const BasicButton: AtomicDesign.Atom<Props> = ({ text, ...props }) => {
  return <NucleonBasicButton {...props}>{text}</NucleonBasicButton>
}
