import { styled } from '@/styles'

export const Footer = styled.footer`
  width: 100%;
  height: ${({ theme }) => theme.height.footer};
  background-color: ${({ theme }) => theme.color.footer};
  display: flex;
  flex-direction: column;
  justify-content: center;
`

export const ExplorerLinkArea = styled.footer`
  padding: ${({ theme }) => theme.space.atom};
`

export const CopyrightArea = styled.footer`
  padding: ${({ theme }) => theme.space.atom};
`
