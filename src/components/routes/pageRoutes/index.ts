import { AdminArticleDetailPage } from '@/components/pages/admin/articles/AdminArticleDetailPage'
import { AdminArticleListPage } from '@/components/pages/admin/articles/AdminArticleListPage'
import { AdminHomePage } from '@/components/pages/admin/globals/AdminHomePage'
import { AdminTagManagePage } from '@/components/pages/admin/tags/AdminTagManagePage'
import { ArticleDetailPage } from '@/components/pages/articles/ArticleDetailPage'
import { ArticleListPage } from '@/components/pages/articles/ArticleListPage'
import { AboutPage } from '@/components/pages/globals/AboutPage'
import { AdminLoginPage } from '@/components/pages/globals/AdminLoginPage'
import { HomePage } from '@/components/pages/globals/HomePage'
import { ProfilePage } from '@/components/pages/globals/ProfilePage'
import { Error404Page } from '@/components/pages/errors/Error404Page'
import { Error500Page } from '@/components/pages/errors/Error500Page'

import { createRouteConfig } from './routeConfig'
import { ROUTE_TYPES, RouteType } from './routeType'
import { PAGE_TYPES, PageType } from './pageType'
import { PAGE_PATHS } from './pagePath'

export { ROUTE_TYPES, PAGE_TYPES, PAGE_PATHS }
export type { RouteType, PageType }

export type RouteParams = {
  articleId: string
  tagId: string
}

const AdminArticleDetailPageRoute = createRouteConfig({
  name: 'Admin Article Detail',
  path: PAGE_PATHS.ADMIN_ARTICLE_DETAIL,
  routeType: ROUTE_TYPES.ADMIN,
  component: AdminArticleDetailPage,
})

const AdminArticleListPageRoute = createRouteConfig({
  name: 'AdminArticleList',
  path: PAGE_PATHS.ADMIN_ARTICLE_LIST,
  routeType: ROUTE_TYPES.ADMIN,
  component: AdminArticleListPage,
})

const AdminHomePageRoute = createRouteConfig({
  name: 'AdminHome',
  path: PAGE_PATHS.ADMIN_TOP,
  routeType: ROUTE_TYPES.ADMIN,
  component: AdminHomePage,
})

const AdminTagManagePageRoute = createRouteConfig({
  name: 'AdminTagManagePage',
  path: PAGE_PATHS.ADMIN_TAG_MANAGE,
  routeType: ROUTE_TYPES.ADMIN,
  component: AdminTagManagePage,
})

const ArticleDetailPageRoute = createRouteConfig<
  Pick<RouteParams, 'articleId'>
>({
  name: 'ArticleDetail',
  path: PAGE_PATHS.ARTICLE_DETAIL,
  routeType: ROUTE_TYPES.STANDARD,
  component: ArticleDetailPage,
})

const ArticleListPageRoute = createRouteConfig({
  name: 'ArticleList',
  path: PAGE_PATHS.ARTICLE_LIST,
  routeType: ROUTE_TYPES.STANDARD,
  component: ArticleListPage,
})

const AboutPageRoute = createRouteConfig({
  name: 'About',
  path: PAGE_PATHS.ABOUT,
  routeType: ROUTE_TYPES.STANDARD,
  component: AboutPage,
})

const AdminLoginPageRoute = createRouteConfig({
  name: 'Login',
  path: PAGE_PATHS.ADMIN_LOGIN,
  routeType: ROUTE_TYPES.STANDARD,
  component: AdminLoginPage,
})

const ProfilePageRoute = createRouteConfig({
  name: 'Profile',
  path: PAGE_PATHS.PROFILE,
  routeType: ROUTE_TYPES.STANDARD,
  component: ProfilePage,
})

const HomePageRoute = createRouteConfig({
  name: 'Home',
  path: PAGE_PATHS.HOME,
  routeType: ROUTE_TYPES.STANDARD,
  component: HomePage,
})

const Error500Route = createRouteConfig({
  name: 'Error500',
  path: PAGE_PATHS.ERROR_500,
  routeType: ROUTE_TYPES.STANDARD,
  component: Error500Page,
})

const Error404Route = createRouteConfig({
  name: 'Error404',
  path: PAGE_PATHS.ERROR_404,
  routeType: ROUTE_TYPES.STANDARD,
  component: Error404Page,
})

export const routes = {
  [PAGE_TYPES.AdminArticleDetailPage]: AdminArticleDetailPageRoute,
  [PAGE_TYPES.AdminArticleListPage]: AdminArticleListPageRoute,
  [PAGE_TYPES.AdminHomePage]: AdminHomePageRoute,
  [PAGE_TYPES.AdminTagManagePage]: AdminTagManagePageRoute,
  [PAGE_TYPES.ArticleDetailPage]: ArticleDetailPageRoute,
  [PAGE_TYPES.ArticleListPage]: ArticleListPageRoute,
  [PAGE_TYPES.AboutPage]: AboutPageRoute,
  [PAGE_TYPES.AdminLoginPage]: AdminLoginPageRoute,
  [PAGE_TYPES.ProfilePage]: ProfilePageRoute,
  [PAGE_TYPES.HomePage]: HomePageRoute,
  [PAGE_TYPES.Error404]: Error404Route,
  [PAGE_TYPES.Error500]: Error500Route,
}
