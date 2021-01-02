import React from 'react'

import { Input } from '@/components/nucleon/forms'

type Props = {
  value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export const HeaderSearchInput: React.FC<Props> = (props) => {
  return <Input {...props} placeholder="search articles" />
}
