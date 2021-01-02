import { styled, theme } from '@/styles'

export const ModalBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #a2a2a280;
  z-index: ${theme.zindex.modal};
`

export const ModalWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const ModalContent = styled.div`
  background-color: ${({ theme }) => theme.color.first};
  position: relative;
  box-shadow: 5px 6px 17px 1px rgba(0, 0, 0, 0.4);
`
