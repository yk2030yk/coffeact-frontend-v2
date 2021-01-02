import { PageType } from '@/components/routes'
import { useRoutes } from './useRoutes'

export const usePageRouteConfig = (pageType: PageType) => {
  const routes = useRoutes()
  return routes[pageType]
}

export const useGetPagePath = (pageType: PageType) => {
  const config = usePageRouteConfig(pageType)
  return config.getPath
}
