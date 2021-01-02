import { styled, mixins } from '@/styles'

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 150px;
`

export const Item = styled.div`
  ${({ theme }) => mixins.itemMarginTop(theme.space.small)}
`
