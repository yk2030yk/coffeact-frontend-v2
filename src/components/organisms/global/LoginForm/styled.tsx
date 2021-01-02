import { styled, mixins } from '@/styles'

export const CardWrapper = styled.div`
  width: 350px;
  background: ${({ theme }) => theme.color.first};
  box-shadow: 1px 0px 8px 1px #181e25;
`

export const Form = styled.div`
  width: 100%;
  padding: ${({ theme }) => theme.space.atom};
`

export const Top = styled.div`
  width: 100%;
  padding: ${({ theme }) => theme.space.atom};
  background: ${({ theme }) => theme.color.second};
  color: white;
  font-weight: bold;
  text-align: center;
`

export const FormItem = styled.div`
  ${({ theme }) => mixins.itemMarginTop(theme.space.atom)}
`
