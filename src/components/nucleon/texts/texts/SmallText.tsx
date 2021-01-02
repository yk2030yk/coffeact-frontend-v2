import React from 'react'
import { theme } from '@/styles'

import { Text, TextProps } from './Text'

type Props = Pick<TextProps, 'color' | 'bold'>

export const SmallText: React.FC<Props> = ({ children, ...props }) => (
  <Text {...props} fontSize={theme.fontSize.smallText}>
    {children}
  </Text>
)
