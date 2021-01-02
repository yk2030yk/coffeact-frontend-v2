import { styled } from '@/styles'

export const Wrapper = styled.div`
  width: 100%;
  max-width: ${({ theme }) => theme.width.maxContent};
  padding: ${({ theme }) => theme.space.basic};
`

export const TitleArea = styled.div`
  text-align: center;
`

export const ArticleListArea = styled.div`
  margin-top: ${({ theme }) => theme.space.basic};
`
