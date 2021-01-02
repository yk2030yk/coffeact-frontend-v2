import React from 'react'
import { Link } from 'react-router-dom'

import * as S from './styled'
import { HeaderIcon } from '@/components/atoms/global'
import { routes } from '@/components/routes'

type Props = {}

export const HeaderStart: React.FC<Props> = () => {
  return (
    <Link to={routes.HomePage.getPath({})}>
      <S.Wrapper>
        <HeaderIcon />
      </S.Wrapper>
    </Link>
  )
}
