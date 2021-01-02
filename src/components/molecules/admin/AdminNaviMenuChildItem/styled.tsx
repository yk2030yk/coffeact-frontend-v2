import { styled, mixins } from '@/styles'

export const MenuItem = styled.div`
  padding: ${({ theme }) => theme.space.small}
    ${({ theme }) => theme.space.small} ${({ theme }) => theme.space.small} 50px;
  ${mixins.pointer}
  display: flex;
  align-items: center;

  &:hover {
    background-color: #22364e;
  }
`
