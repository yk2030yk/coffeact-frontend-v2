import React from 'react'

import logoSrc from '@/assets/images/logo_b.png'
import * as S from './styled'

type Props = {
  height?: number
}

export const AppIcon: AtomicDesign.Nucleon<Props> = ({ height = 80 }) => (
  <S.Img src={logoSrc} height={height} />
)
