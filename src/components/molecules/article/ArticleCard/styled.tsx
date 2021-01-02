import { styled, mixins } from '@/styles'

export const Wrapper = styled.div<{ isPublish: boolean }>`
  ${mixins.pointer}
  width: 100%;
  height: 100%;
`

export const ImageContent = styled.div`
  width: 100%;
  border-radius: 5px 5px 0 0;

  & > img,
  & > svg {
    width: 100%;
    height: auto;
    border-radius: 5px 5px 0 0;
  }
`

export const InfoContent = styled.div`
  padding: ${({ theme }) => theme.space.small};
`

export const InfoItem = styled.div`
  ${({ theme }) => mixins.itemMarginTop(theme.space.atom)}
`
