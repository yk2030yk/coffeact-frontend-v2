import { styled, mixins } from '@/styles'

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
`

export const Item = styled.div`
  ${({ theme }) => mixins.itemMarginLeft(theme.space.small)}
`
