import { styled } from '@/styles'

export const Wrapper = styled.div`
  width: 100%;
  max-width: ${({ theme }) => theme.width.maxContent};
  padding: ${({ theme }) => theme.space.basic};
`
