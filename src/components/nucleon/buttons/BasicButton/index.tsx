import React, { ComponentProps } from 'react'

import { theme } from '@/styles'
import { Button, ButtonColorSet, ButtonCssProperty } from './styled'

export const createButtonCssProperty = (
  color: string,
  backgroundColor: string
): ButtonCssProperty => ({
  color,
  backgroundColor,
})

export const createButtonColorSet = (
  color: string,
  backgroundColor: string,
  disabledColor: string,
  disabledBackgroundColor: string,
  hoverColor: string,
  hoverBackgroundColor: string
): ButtonColorSet => ({
  default: createButtonCssProperty(color, backgroundColor),
  disabled: createButtonCssProperty(disabledColor, disabledBackgroundColor),
  hover: createButtonCssProperty(hoverColor, hoverBackgroundColor),
})

export type BasicButtonProps = Omit<
  ComponentProps<typeof Button>,
  'colorSet'
> & {
  colorSet?: ButtonColorSet
  disabled?: boolean
}

const BasicColorSet = createButtonColorSet(
  theme.color.white,
  theme.color.third,
  theme.color.white,
  theme.color.third,
  theme.color.white,
  theme.color.third
)

export const BasicButton: AtomicDesign.Nucleon<BasicButtonProps> = ({
  disabled = false,
  colorSet = BasicColorSet,
  children,
  ...props
}) => {
  return (
    <Button colorSet={colorSet} disabled={disabled} {...props}>
      {children}
    </Button>
  )
}
