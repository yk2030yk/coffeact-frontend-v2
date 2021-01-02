import { styled } from '@/styles'

export const Wrapper = styled.div`
  width: 100%;

  & > h1,
  & > h2,
  & > h3,
  & > h4,
  & > p,
  & > pre {
    color: ${({ theme }) => theme.color.blackCat};
    margin: ${({ theme }) => theme.space.small} 0;
  }

  & > h1 {
    font-size: ${({ theme }) => theme.fontSize.articleH1};
  }

  & > h2 {
    font-size: ${({ theme }) => theme.fontSize.articleH2};
  }

  & > h3 {
    font-size: ${({ theme }) => theme.fontSize.articleH3};
  }

  & > h4 {
    font-size: ${({ theme }) => theme.fontSize.articleH4};
  }

  & > p {
    font-size: ${({ theme }) => theme.fontSize.articleP};
  }

  & > pre {
    background-color: #181e25;
    font-weight: 600;
    padding: 10px;
    font-size: 11px;
    font-style: italic;
    color: #5e8da9;
  }
`
