import { styled, mixins } from '@/styles'

export const Card = styled.div`
  ${({ theme }) => mixins.itemMarginTop(theme.space.small)}
`
