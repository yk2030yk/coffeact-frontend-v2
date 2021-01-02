import React from 'react'

import { StorageImage } from '@/components/nucleon/parts'
import * as S from './styled'

type Props = {
  path: string
}

export const ArticleDetailEyecatchImage: React.FC<Props> = ({ path }) => {
  return (
    <S.Wrapper>
      <StorageImage path={path} />
    </S.Wrapper>
  )
}
