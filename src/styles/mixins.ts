import { css } from '@emotion/core'

import theme from './theme'
import * as colorUtils from './colorUtils'

/**
 * デフォルト値
 */
export const defaultFont = css`
  font-family: ${theme.fontFamily.default};
  font-size: ${theme.fontSize.default};
  font-weight: ${theme.fontWeight.normal};
  color: ${theme.color.indianInk};
  letter-spacing: 1px;
`

export const text = css`
  font-size: ${theme.fontSize.text};
  font-weight: ${theme.fontWeight.normal};
  color: ${theme.color.carbon};
  letter-spacing: 1.5px;
`

export const smallText = css`
  font-size: ${theme.fontSize.smallText};
  font-weight: ${theme.fontWeight.normal};
  color: ${theme.color.charcoalSmudge};
`

export const heading = css`
  font-size: ${theme.fontSize.heading};
  font-weight: ${theme.fontWeight.bold};
  color: ${theme.color.davysGrey};
`

export const heading2 = css`
  font-size: ${theme.fontSize.heading2};
  font-weight: ${theme.fontWeight.bold};
  color: ${theme.color.davysGrey};
`

export const card = css`
  background-color: ${theme.color.white};
  border-radius: 5px;
  box-shadow: 0px 10px 20px rgba(10, 33, 65, 0.05),
    0px 0px 2px rgba(0, 0, 0, 0.13);
`

export const pointer = css`
  cursor: pointer;
`

export const resetAnchor = css`
  text-decoration: none;
`

export const inputBox = css`
  padding: 10px 10px;
  width: 100%;
  background-color: ${theme.color.white};
  border: solid 1px ${theme.color.leadbelcher};
  border-radius: 3px;

  &:focus {
    outline: none;
  }
`

export const button = ({
  bgColor = theme.color.yankeesBlue,
  hoverBgColor = colorUtils.brighten(theme.color.yankeesBlue),
  fontColor = theme.color.white,
  bgFontColor = theme.color.white,
  width = 'auto',
}: {
  bgColor?: string
  hoverBgColor?: string
  fontColor?: string
  bgFontColor?: string
  width?: string
} = {}) => css`
  color: ${fontColor};
  background-color: ${bgColor};
  padding: 10px 20px;
  border-radius: 3px;
  width: ${width};
  text-align: center;
  border: none;
  cursor: pointer;
  display: inline-block;

  &:disabled {
    background-color: ${colorUtils.darken(bgColor)};
    color: ${bgFontColor};
  }

  &:hover {
    &:not([disabled]) {
      background-color: ${hoverBgColor};
      color: ${bgFontColor};
    }
  }
`

export const itemMarginTop = (marginTop: string = theme.space.basic) => css`
  &:nth-of-type(n + 2) {
    margin-top: ${marginTop};
  }
`

export const itemMarginLeft = (marginLeft: string = theme.space.basic) => css`
  &:nth-of-type(n + 2) {
    margin-left: ${marginLeft};
  }
`
