import { styled } from '@/styles'

export const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  padding-top: ${({ theme }) => theme.height.header};
  display: flex;
  flex-direction: column;
`

export const TopContent = styled.div``

export const MainContent = styled.div``

export const BottomContent = styled.div`
  margin-top: auto;
`
