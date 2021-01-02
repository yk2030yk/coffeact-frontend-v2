import React from 'react'

import * as S from './styled'
import { HeaderSearchIcon, HeaderSearchInput } from '@/components/atoms/global'
import { useInputChange } from '@/hooks/utils/useInputChange'

type Props = {}

export const HeaderSearch: React.FC<Props> = () => {
  const [searchText, handleChangeSearchText] = useInputChange()
  const handleClickIcon = () => {}

  return (
    <S.Wrapper>
      <S.Item>
        <HeaderSearchInput
          value={searchText}
          onChange={handleChangeSearchText}
        />
      </S.Item>
      <S.Item>
        <HeaderSearchIcon onClick={handleClickIcon} />
      </S.Item>
    </S.Wrapper>
  )
}
