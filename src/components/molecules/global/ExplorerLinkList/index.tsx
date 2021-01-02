import React from 'react'

import { ExplorerLink } from '@/components/atoms/global'
import * as S from './styled'

type Props = {
  links: {
    to: string
    text: string
  }[]
}

export const ExplorerLinkList: AtomicDesign.Molecule<Props> = ({ links }) => {
  return (
    <S.Wrapper>
      <S.LinkList>
        {links.map((link) => (
          <S.LinkItem key={link.text}>
            <ExplorerLink {...link} />
          </S.LinkItem>
        ))}
      </S.LinkList>
    </S.Wrapper>
  )
}
