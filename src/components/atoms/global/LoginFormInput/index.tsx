import React from 'react'

import { Input } from '@/components/nucleon/forms'

type Props = {
  value: string
  placeholder: string
  type: 'password' | 'text'
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export const LoginFormInput: AtomicDesign.Atom<Props> = (props) => {
  return <Input {...props} />
}
