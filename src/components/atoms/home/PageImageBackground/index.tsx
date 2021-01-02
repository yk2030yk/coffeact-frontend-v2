import React from 'react'

import homeHeaderSrc from '@/assets/images/homeHeader.jpg'
import * as S from './styled'

export const PageImageBackground: React.FC = () => {
  return <S.Image src={homeHeaderSrc} />
}
