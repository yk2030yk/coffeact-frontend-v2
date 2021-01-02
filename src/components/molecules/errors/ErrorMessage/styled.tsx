import { styled, mixins } from '@/styles'

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

export const Item = styled.div`
  ${mixins.itemMarginTop()}
`
