import React from 'react'
import { theme } from '@/styles'

import {
  BasicButton,
  BasicButtonProps,
  createButtonColorSet,
} from '../BasicButton'

const BackButtonColorSet = createButtonColorSet(
  theme.color.argent,
  theme.color.argent,
  theme.color.argent,
  theme.color.argent,
  theme.color.argent,
  theme.color.argent
)

export const BackButton: AtomicDesign.Nucleon<BasicButtonProps> = (props) => {
  return <BasicButton {...props} colorSet={BackButtonColorSet} />
}
