import { styled, colorUtils } from '@/styles'

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
`

export const ImageBox = styled.div`
  width: 600px;
  height: 300px;
  position: relative;
`

export const ImageOverLay = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    background-color: ${({ theme }) =>
      colorUtils.alpha(theme.color.second, 0.5)};
  }

  & > p {
    display: none;
    color: #fff;
    font-size: 20px;
    font-weight: 600;
  }

  &:hover > p {
    display: block;
  }
`
