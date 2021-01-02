import { styled } from '@/styles'

export const Wrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: ${({ theme }) => theme.color.second};
`

export const TopContent = styled.div`
  position: sticky;
  width: 100%;
  height: ${({ theme }) => theme.height.header};
  top: 0;
  left: 0;
  z-index: 200;
`

export const MainContent = styled.div`
  display: flex;
  justify-content: center;
`
