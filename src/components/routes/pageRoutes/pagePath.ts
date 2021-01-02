const ROUTE_PARAMS = {
  ARTICLE_ID: ':articleId',
} as const

export const PAGE_PATHS = {
  ADMIN_TOP: '/admin',
  ADMIN_ARTICLE_DETAIL: `/admin/articles/${ROUTE_PARAMS.ARTICLE_ID}`,
  ADMIN_ARTICLE_LIST: '/admin/articles',
  ADMIN_TAG_MANAGE: '/admin/tags',
  ADMIN_LOGIN: '/admin_login',
  HOME: '/',
  ABOUT: '/about',
  PROFILE: '/profile',
  ARTICLE_LIST: '/articles',
  ARTICLE_DETAIL: `/article/${ROUTE_PARAMS.ARTICLE_ID}`,
  ERROR_404: '*',
  ERROR_500: '/500',
} as const
