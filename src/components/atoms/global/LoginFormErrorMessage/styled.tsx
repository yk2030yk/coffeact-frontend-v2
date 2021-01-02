import { styled, mixins } from '@/styles'

export const Item = styled.div`
  ${({ theme }) => mixins.itemMarginTop(theme.space.small)}
`
