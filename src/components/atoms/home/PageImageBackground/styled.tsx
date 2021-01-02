import { styled } from '@/styles'

export const Image = styled.div<{ src: string }>`
  width: 100%;
  height: 100%;
  background-repeat: no-repeat;
  background-image: url(${({ src }) => src});
  background-size: cover;
  background-position: center;
`
