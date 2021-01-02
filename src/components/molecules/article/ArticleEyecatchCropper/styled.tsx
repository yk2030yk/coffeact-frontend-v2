import { styled } from '@/styles'

export const Wrapper = styled.div`
  width: 500px;
`

export const CropModeArea = styled.div`
  width: 100%;
  height: 100%;
`

export const DropZoneModeArea = styled.div`
  width: 100%;
  height: 300px;
  padding: ${({ theme }) => theme.space.atom};
`

export const CropperWrapper = styled.div`
  width: 100%;
  height: 100%;
  padding: ${({ theme }) => theme.space.small};
`

export const ButtonGroupWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  background-color: ${({ theme }) => theme.color.second};
  padding: ${({ theme }) => theme.space.small};
`

export const ButtonGroup = styled.div`
  display: grid;
  grid-template-columns: 100px 100px 100px;
  grid-gap: 10px;
`
