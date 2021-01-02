import React from 'react'

import { ErrorMessage } from '@/components/molecules/errors'
import * as S from './styled'

export const Error500Content: React.FC = () => {
  return (
    <S.Wrapper>
      <ErrorMessage
        title="500 Internal Server Error"
        text="Sorry. The requested URL was not found."
      />
    </S.Wrapper>
  )
}
