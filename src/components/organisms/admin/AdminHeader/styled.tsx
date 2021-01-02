import { styled } from '@/styles'

export const Header = styled.header`
  width: 100%;
  height: ${({ theme }) => theme.height.header};
  background-color: ${({ theme }) => theme.color.first};
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 ${({ theme }) => theme.space.atom};
  z-index: ${({ theme }) => theme.zindex.header};
  box-shadow: 1px 0px 8px 1px #181e25;
  background-color: ${({ theme }) => theme.color.second};
`
