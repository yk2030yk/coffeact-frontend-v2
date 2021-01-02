import { styled, mixins } from '@/styles'

export const Wrapper = styled.div`
  width: 100%;
  max-width: ${({ theme }) => theme.width.maxContent};
`

export const Item = styled.div`
  ${({ theme }) => mixins.itemMarginTop(theme.space.basic)}
`
