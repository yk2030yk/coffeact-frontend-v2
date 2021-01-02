import { styled, mixins } from '@/styles'

export const MenuItem = styled.div`
  padding: ${({ theme }) => theme.space.small};
  ${mixins.pointer}
  display: flex;
  align-items: center;

  &:hover {
    background-color: #22364e;
  }
`

export const Item = styled.div`
  ${({ theme }) => mixins.itemMarginLeft(theme.space.small)};
`
