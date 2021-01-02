import React from 'react'

import { Text, TextProps } from './Text'

type Props = Pick<TextProps, 'color' | 'bold'>

export const NormalText: React.FC<Props> = ({ children, ...props }) => (
  <Text {...props}>{children}</Text>
)
