import { styled } from '@/styles'

export const Header = styled.header`
  width: 100%;
  height: ${({ theme }) => theme.height.header};
  background-color: ${({ theme }) => theme.color.first};
  position: fixed;
  top: 0;
  left: 0;
  z-index: ${({ theme }) => theme.zindex.header};
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 ${({ theme }) => theme.space.atom};
  box-shadow: 1px 0px 8px 1px #181e25;
`
