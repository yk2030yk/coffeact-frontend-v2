import React from 'react'

import { StorageImage } from '@/components/nucleon/parts'

type Props = {
  path: string
}

export const ArticleCardEyecatchImage: AtomicDesign.Atom<Props> = ({
  path,
}) => {
  return <StorageImage path={path} />
}
