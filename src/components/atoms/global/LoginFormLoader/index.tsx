import React from 'react'

import { LoginLoader } from '@/components/nucleon/loaders'
import * as S from './styled'

type Props = {}

export const LoginFormLoader: AtomicDesign.Atom<Props> = () => {
  return (
    <S.Wrapper>
      <S.Item>
        <LoginLoader />
      </S.Item>
    </S.Wrapper>
  )
}
