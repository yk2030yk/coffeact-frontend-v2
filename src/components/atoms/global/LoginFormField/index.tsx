import React, { ReactElement } from 'react'

import * as S from './styled'

type Props = {
  input: ReactElement
}

export const LoginFormField: React.FC<Props> = ({ input }) => {
  return (
    <div>
      <S.Item>{input}</S.Item>
    </div>
  )
}
