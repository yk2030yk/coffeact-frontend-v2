import { styled, mixins } from '@/styles'

export const Wrapper = styled.div`
  padding: 5px;
  ${mixins.pointer}
  border-radius: 5px;
  &:hover {
    background-color: ${({ theme }) => theme.color.whiteAlpha};
  }
`
