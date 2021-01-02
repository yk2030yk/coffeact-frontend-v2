import React from 'react'
import { Link } from 'react-router-dom'

import { NaviMenuChildText } from '@/components/atoms/admin'
import * as S from './styled'

type Props = {
  to: string
  text: string
}

export const AdminNaviMenuChildItem: AtomicDesign.Atom<Props> = ({
  text,
  to,
}) => {
  return (
    <Link to={to}>
      <S.MenuItem>
        <NaviMenuChildText text={text} />
      </S.MenuItem>
    </Link>
  )
}
