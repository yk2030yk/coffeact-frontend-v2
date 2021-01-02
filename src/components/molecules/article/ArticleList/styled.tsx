import { styled } from '@/styles'

export const Wrapper = styled.div`
  width: 100%;
  max-width: ${({ theme }) => theme.width.maxContent};
  padding: ${({ theme }) => theme.space.basic};
`

export const TitleArea = styled.div`
  text-align: center;
`

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
