export const PAGE_TYPES = {
  AdminArticleDetailPage: 'AdminArticleDetailPage',
  AdminArticleListPage: 'AdminArticleListPage',
  AdminHomePage: 'AdminHomePage',
  AdminTagManagePage: 'AdminTagManagePage',
  ArticleDetailPage: 'ArticleDetailPage',
  ArticleListPage: 'ArticleListPage',
  AboutPage: 'AboutPage',
  AdminLoginPage: 'AdminLoginPage',
  ProfilePage: 'ProfilePage',
  HomePage: 'HomePage',
  Error404: 'Error404',
  Error500: 'Error500',
} as const

export type PageType = typeof PAGE_TYPES[keyof typeof PAGE_TYPES]
