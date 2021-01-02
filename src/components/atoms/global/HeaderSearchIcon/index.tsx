import React from 'react'

import { SearchIcon } from '@/components/nucleon/icons'

type Props = {
  onClick: () => void
}

export const HeaderSearchIcon: React.FC<Props> = (props) => {
  return (
    <SearchIcon
      fontSize={22}
      color="#fff"
      {...props}
      style={{ cursor: 'pointer', marginTop: '1px' }}
    />
  )
}
