import { styled } from '@/styles'

export const IconText = styled.p`
  font-size: ${({ theme }) => theme.fontSize.middle};
  color: ${({ theme }) => theme.color.white};
  font-family: ${({ theme }) => theme.fontFamily.pageTitle};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
`
