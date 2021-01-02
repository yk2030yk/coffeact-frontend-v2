import { styled, mixins } from '@/styles'

export const TextArea = styled.textarea`
  ${mixins.inputBox}
  height: 100%;
  resize: none;
`
