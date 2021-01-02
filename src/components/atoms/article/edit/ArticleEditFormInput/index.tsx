import React from 'react'

import { Input } from '@/components/nucleon/forms'

type Props = {
  value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export const ArticleEditFormInput: AtomicDesign.Atom<Props> = (props) => {
  return <Input {...props} />
}
