import React from 'react'

import * as S from './styled'

type Props = {}

export const ArticleDetailPaper: AtomicDesign.Atom<Props> = ({ children }) => {
  return <S.Paper>{children}</S.Paper>
}
