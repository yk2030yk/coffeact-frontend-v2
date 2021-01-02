import { styled } from '@/styles'

export type ButtonCssProperty = {
  color: string
  backgroundColor: string
}

export type ButtonColorSet = {
  default: ButtonCssProperty
  hover: ButtonCssProperty
  disabled: ButtonCssProperty
}

export const Button = styled.button<{ colorSet: ButtonColorSet }>`
  background-color: ${({ colorSet }) => colorSet.default.backgroundColor};
  color: ${({ colorSet }) => colorSet.default.color};
  padding: 10px;
  border-radius: 2px;
  width: 100%;
  text-align: center;
  border: none;
  cursor: pointer;
  display: inline-block;

  &:disabled {
    background-color: ${({ colorSet }) => colorSet.disabled.backgroundColor};
    color: ${({ colorSet }) => colorSet.disabled.color};
  }

  &:hover {
    &:not([disabled]) {
      background-color: ${({ colorSet }) => colorSet.hover.backgroundColor};
      color: ${({ colorSet }) => colorSet.hover.color};
    }
  }

  &:focus {
    outline: none;
  }
`
