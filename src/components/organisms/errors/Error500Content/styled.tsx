import { styled } from '@/styles'

export const Wrapper = styled.footer`
  width: 100%;
  height: 500px;
  background-color: ${({ theme }) => theme.color.error};
  display: flex;
  flex-direction: column;
  justify-content: center;
`
