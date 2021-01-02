import { styled } from '@/styles'

export const MenuItemWrapper = styled.div`
  position: relative;
`

export const ExpandIconWrapper = styled.div`
  position: absolute;
  right: ${({ theme }) => theme.space.small};
  top: 0;
  bottom: 0;
  margin: auto;
  display: flex;
  align-items: center;
`
