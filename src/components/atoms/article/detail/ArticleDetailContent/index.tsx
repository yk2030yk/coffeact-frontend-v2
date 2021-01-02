import React from 'react'
import ReactMarkdown from 'react-markdown'

import * as S from './styled'

type Props = {
  content: string
}

export const ArticleDetailContent: AtomicDesign.Atom<Props> = ({ content }) => {
  return (
    <S.Wrapper>
      <ReactMarkdown source={content} />
    </S.Wrapper>
  )
}
