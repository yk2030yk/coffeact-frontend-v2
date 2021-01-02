import React, { ComponentProps } from 'react'

import * as S from './styled'

type Props = ComponentProps<typeof S.Input>

export const Input: AtomicDesign.Nucleon<Props> = (props) => {
  return <S.Input {...props} />
}
