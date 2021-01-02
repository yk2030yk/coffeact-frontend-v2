import { styled } from '@/styles'

export const Menu = styled.div`
  position: sticky;
  width: 100%;
  height: 50px;
  background-color: ${({ theme }) => theme.color.second};
  display: flex;
  align-items: center;
  top: 0;
  left: 0;
  z-index: 200;
  box-shadow: 1px 0px 8px 1px #181e25;
  padding: ${({ theme }) => theme.space.small};
`

export const MenuContent = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 40px);
  grid-template-rows: 40px;
  grid-gap: 5px;
  margin-left: auto;
`

export const Item = styled.div<{ disabled?: boolean }>`
  width: 100%;
  height: 100%;
  background-color: ${({ disabled, theme }) =>
    disabled ? '#ddd' : theme.color.second};
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
`
