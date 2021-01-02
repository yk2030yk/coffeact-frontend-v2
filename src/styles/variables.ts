import { alpha } from './colorUtils'

/**
 * font-family定義
 */
export const fontFamily = {
  default:
    '"Montserrat", "Noto Sans JP", "ヒラギノ角ゴシック Pro", "Hiragino Kaku Gothic Pro", Robot, Arial, "メイリオ", Meiryo,Osaka, "ＭＳ Ｐゴシック", "MS PGothic", sans-serif',
  pageTitle: '"Montserrat" ,sans-serif',
}

/**
 * font-size定義
 */
export const fontSize = {
  text: '13px',

  smallText: '11px',
  default: '13px',
  middle: '20px',
  large: '40px',
  h1: '40px',

  heading2: '16px',
  heading: '18px',
  pageTitle: '20px',
  headTitle: '70px',

  articleH1: '20px',
  articleH2: '16px',
  articleH3: '14px',
  articleH4: '14px',
  articleH5: '14px',
  articleP: '12px',
}

export const fontWeight = {
  normal: '400',
  bold: '600',
}

/**
 * media定義
 */
export const media = {
  sm: '@media (max-width: 768px)',
}

/**
 * space
 */
export const space = {
  basic: '30px',
  atom: '20px',
  small: '10px',
}

/**
 * z-index
 */
export const zindex = {
  header: 300,
  modal: 500,
  loading: 700,
  snackbar: 900,
}

/**
 * 幅定義
 */
export const width = {
  maxContent: '1100px',
}

/**
 * 高さ定義
 */
export const height = {
  header: '70px',
  homeHeader: '500px',
  footer: '200px',
  minContent: '700px',
}

const colors = {
  red: '#f00',
  vermilionBird: '#f44336',
  embarrassment: '#ff7878',
  white: '#fff',
  whiteSmoke: '#f5f5f5',
  crystalBell: '#efefef',
  superSilver: '#eee',
  coldMorning: '#e5e5e5',
  greyArea: '#ddd',
  weatheredStone: '#c4c4c4',
  dhusarGrey: '#ababab',
  indianInk: '#3a3e49',
  hardCoal: '#656565',
  davysGrey: '#555555',
  carbon: '#333',
  argent: '#888888',
  dodgerBlue: '#3387ff',
  blueRibbon: '#0069ff',
  dodgerBlueA01: 'rgba(51, 135, 255, 0.1)',
  blueRibbonA01: 'rgba(0, 105, 255, 0.1)',
  darkestDungeon: '#610015',
  charcoalSmudge: '#5f5f5f',
  blackCat: '#2f2f2f',
  yankeesBlue: '#162e42',
  reactBlue: '#54d3fa',
  reactBlueDark: '#73aabb',
  jamaicanJade: '#69ceb7',
  flintRock: '#969494',
  oldGreyMare: '#b5b4ad',
  evilSunzScarlet: '#c11b1b',
  exodusFruit: '#635ada',
  christmasSilver: '#e0e0e0',
  bgWhite: '#fdfdfd',
  coronation: '#ececec',
  plaster: '#eaeaea',
  aquarellePurple: '#d8dff7',
  radiantYellow: '#ff9f24',
  leadbelcher: '#cacaca',
  spanishGrey: '#969696',
  fusionRed: '#ff6363',
  asparagus: '#78ad56',

  bg: '#000000',
} as const

/**
 * 色定義
 * 色の名前は以下のコマンドで生成
 * 近似している色名も出力しているので被る場合は自分でつけてください。
 * $ yarn namingColor -- "#ffffff"
 */
export const color = {
  ...colors,

  white: colors.white,
  whiteAlpha: alpha(colors.white, 0.2),
  header: alpha(colors.bg, 0),
  headerOverlay: alpha(colors.bg, 0.7),
  pageTitleOverlay: alpha(colors.bg, 0.6),
  footer: '#171717',
  error: '#c3c3c3',

  first: '#11161b',
  second: '#9eadbd',
  third: '#E49D23',
  fourth: '#31A27F',
  fifth: '#8CD178',
  sixth: '#F9F871',
} as const
