import React from 'react'
import { IconBaseProps } from 'react-icons'

import { NaviMenuText } from '@/components/atoms/admin'
import * as S from './styled'

type Props = {
  text: string
  Icon: AtomicDesign.Nucleon<IconBaseProps>
}

export const AdminNaviMenuItem: AtomicDesign.Atom<Props> = ({ text, Icon }) => {
  return (
    <S.MenuItem>
      <S.Item>
        <Icon color="#fff" fontSize="20px" />
      </S.Item>
      <S.Item>
        <NaviMenuText text={text} />
      </S.Item>
    </S.MenuItem>
  )
}
