import React from 'react'

import { ErrorText, ErrorTitle } from '@/components/atoms/errors'
import * as S from './styled'

type Props = {
  title: string
  text: string
}

export const ErrorMessage: AtomicDesign.Molecule<Props> = ({ title, text }) => {
  return (
    <S.Wrapper>
      <S.Item>
        <ErrorTitle title={title} />
      </S.Item>
      <S.Item>
        <ErrorText text={text} />
      </S.Item>
    </S.Wrapper>
  )
}
