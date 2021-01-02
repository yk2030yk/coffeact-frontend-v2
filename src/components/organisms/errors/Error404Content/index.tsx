import React from 'react'

import { ErrorMessage } from '@/components/molecules/errors'
import * as S from './styled'

export const Error404Content: React.FC = () => {
  return (
    <S.Wrapper>
      <ErrorMessage
        title="404 Page Not Found"
        text="Sorry. The requested URL was not found."
      />
    </S.Wrapper>
  )
}
