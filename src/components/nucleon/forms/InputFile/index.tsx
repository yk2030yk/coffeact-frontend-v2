import React, { useState } from 'react'
import { v4 as uuidV4 } from 'uuid'

import * as S from './styled'

type Props = {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export const InputFile: AtomicDesign.Nucleon<Props> = (props) => {
  const [id] = useState(uuidV4())
  return (
    <div>
      <S.Input type="file" {...props} id={id} />
      <label htmlFor={id}>aaa</label>
    </div>
  )
}
