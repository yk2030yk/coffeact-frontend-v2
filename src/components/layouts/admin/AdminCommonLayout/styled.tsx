import { styled } from '@/styles'

export const Wrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  display: grid;
  grid-template-columns: 300px 1fr;
  background-color: ${({ theme }) => theme.color.second};
`

export const LeftArea = styled.div`
  width: 100%;
  height: 100%;
`

export const RightArea = styled.div`
  width: 100%;
  height: 100%;
`

export const SidebarMenuArea = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 300px;
  height: 100%;
`

export const TopContent = styled.div`
  position: sticky;
  left: 0;
  top: 0;
  height: ${({ theme }) => theme.height.header};
`

export const MainContent = styled.div``

export const BottomContent = styled.div``
