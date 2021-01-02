import { ComponentProps } from 'react'
import { styled } from '@/styles'

export type HeadingProps = {
  color?: string
  fontSize?: string
  bold?: boolean
}

const _H1 = styled.h1<HeadingProps>`
  color: ${({ color, theme }) => color || theme.color.carbon};
  font-size: ${({ fontSize, theme }) => fontSize || theme.fontSize.h1};
  font-weight: ${({ bold, theme }) =>
    bold ? theme.fontWeight.bold : theme.fontWeight.normal};
  letter-spacing: 1.5px;
`

export const H1: AtomicDesign.Nucleon<ComponentProps<typeof _H1>> = _H1
