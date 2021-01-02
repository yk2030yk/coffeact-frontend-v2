import React from 'react'

import { NormalText } from '@/components/nucleon/texts'

type Props = {
  updatedAt: string
}

export const ArticleEditFormFieldLabel: AtomicDesign.Atom<Props> = ({
  updatedAt,
}) => {
  return <NormalText bold>{updatedAt}</NormalText>
}
