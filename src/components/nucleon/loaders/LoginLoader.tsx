import React from 'react'
import PropagateLoader from 'react-spinners/PropagateLoader'

import { theme } from '@/styles'

type PropagateLoaderProps = React.ComponentProps<typeof PropagateLoader>

type Props = PropagateLoaderProps

export const LoginLoader: React.FC<Props> = (props) => (
  <PropagateLoader color={theme.color.reactBlue} {...props} />
)
