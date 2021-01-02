import { styled } from '@/styles'

export const DropZone = styled.div`
  width: 100%;
  height: 100%;
  background-color: #bbc3ce;
  border: dotted 3px #16504b;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  position: relative;
`

export const Overlay = styled.div<{ isDragActive: boolean }>`
  ${({ isDragActive }) => !isDragActive && 'display: none;'}
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.5);
`
