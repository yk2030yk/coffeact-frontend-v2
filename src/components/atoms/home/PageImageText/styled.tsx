import { styled } from '@/styles'

export const ImageText = styled.p`
  font-size: ${({ theme }) => theme.fontSize.headTitle};
  color: ${({ theme }) => theme.color.white};
  font-family: ${({ theme }) => theme.fontFamily.pageTitle};
  font-weight: ${({ theme }) => theme.fontWeight.bold};

  ${({ theme }) => theme.media.sm} {
    font-size: ${({ theme }) => theme.fontSize.middle};
  }
`
