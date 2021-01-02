import React from 'react'

import { TextArea } from '@/components/nucleon/forms'

type Props = {
  value: string
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void
}

export const ArticleEditFormTextarea: AtomicDesign.Atom<Props> = (props) => {
  return <TextArea {...props} />
}
