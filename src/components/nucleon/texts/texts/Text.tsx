import { styled } from '@/styles'

export type TextProps = {
  color?: string
  fontSize?: string
  bold?: boolean
}

export const Text = styled.p<TextProps>`
  color: ${({ color, theme }) => color || theme.color.carbon};
  font-size: ${({ fontSize, theme }) => fontSize || theme.fontSize.default};
  font-weight: ${({ bold, theme }) =>
    bold ? theme.fontWeight.bold : theme.fontWeight.normal};
  letter-spacing: 1.5px;
`
