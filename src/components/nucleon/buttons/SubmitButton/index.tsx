import React from 'react'
import { theme } from '@/styles'

import {
  BasicButton,
  BasicButtonProps,
  createButtonColorSet,
} from '../BasicButton'

const SubmitButtonColorSet = createButtonColorSet(
  theme.color.white,
  theme.color.blueRibbon,
  theme.color.white,
  theme.color.blueRibbon,
  theme.color.white,
  theme.color.blueRibbon
)

export const SubmitButton: AtomicDesign.Nucleon<BasicButtonProps> = (props) => {
  return <BasicButton {...props} colorSet={SubmitButtonColorSet} />
}
