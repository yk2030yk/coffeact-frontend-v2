import React from 'react'

import * as S from './styled'

type Props = {}

export const LoginFormCard: AtomicDesign.Atom<Props> = ({ children }) => {
  return <S.Card>{children}</S.Card>
}
