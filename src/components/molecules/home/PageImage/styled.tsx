import { styled } from '@/styles'

export const Wrapper = styled.div`
  width: 100%;
  height: 350px;
  position: relative;

  ${({ theme }) => theme.media.sm} {
    height: 200px;
  }
`

export const TextPosition = styled.div`
  position: absolute;
  top: 0;
  left: 50px;
  bottom: 0;
  margin: auto;
  height: 75px;
  display: flex;
  align-items: center;
  z-index: ${({ theme }) => theme.zindex.header - 1};

  ${({ theme }) => theme.media.sm} {
    left: 0;
    right: 0;
    justify-content: center;
  }
`

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.color.pageTitleOverlay};
  z-index: ${({ theme }) => theme.zindex.header - 2};
`
