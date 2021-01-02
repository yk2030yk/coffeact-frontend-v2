import { styled } from '@/styles'

export const CardList = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: 260px;
  grid-gap: 20px;

  ${({ theme }) => theme.media.sm} {
    grid-template-columns: repeat(1, 1fr);
  }
`
