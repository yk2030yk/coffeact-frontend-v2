import React from 'react'
import { theme } from '@/styles'

import {
  BasicButton,
  BasicButtonProps,
  createButtonColorSet,
} from '../BasicButton'

const NextButtonColorSet = createButtonColorSet(
  theme.color.argent,
  theme.color.argent,
  theme.color.argent,
  theme.color.argent,
  theme.color.argent,
  theme.color.argent
)

export const NextButton: AtomicDesign.Nucleon<BasicButtonProps> = (props) => {
  return <BasicButton {...props} colorSet={NextButtonColorSet} />
}
