import React, { ComponentProps } from 'react'

import * as S from './styled'

type Props = ComponentProps<typeof S.TextArea>

export const TextArea: AtomicDesign.Nucleon<Props> = (props) => {
  return <S.TextArea {...props} />
}
