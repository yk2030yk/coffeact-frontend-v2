import { styled, mixins } from '@/styles'

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  max-width: 1100px;
`

export const PaperContent = styled.div`
  padding: ${({ theme }) => theme.space.basic};
`

export const DetailImageArea = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`

export const DetailTopArea = styled.div`
  margin-top: ${({ theme }) => theme.space.atom};
`

export const DetailTopAreaItem = styled.div`
  ${({ theme }) => mixins.itemMarginTop(theme.space.atom)}
`

export const DetailContentArea = styled.div`
  margin-top: ${({ theme }) => theme.space.atom};
  width: 100%;
  height: 100%;
`
