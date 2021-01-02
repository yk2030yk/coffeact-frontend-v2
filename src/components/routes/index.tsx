import React from 'react'
import { Switch } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'

import {
  routes,
  ROUTE_TYPES,
  RouteType,
  PAGE_TYPES,
  PageType,
  PAGE_PATHS,
} from './pageRoutes'
import { AppRoute } from './AppRoute'
import { AuthRoute } from './AuthRoute'
import { CoffeeActApplicationError } from '@/errors'

export { routes, ROUTE_TYPES, PAGE_TYPES, PAGE_PATHS }
export type { RouteType, PageType }
export type PageRoutesConfig = typeof routes[keyof typeof routes]

export const Routes: React.FC = () => {
  return (
    <AnimatePresence>
      <Switch>
        {Object.values(routes).map((routeConfig) => {
          switch (routeConfig.routeType) {
            case ROUTE_TYPES.STANDARD:
              return (
                <AppRoute
                  key={routeConfig.name}
                  {...routeConfig}
                  routeConfig={routeConfig}
                />
              )
            case ROUTE_TYPES.ADMIN:
              return (
                <AuthRoute
                  key={routeConfig.name}
                  {...routeConfig}
                  routeConfig={routeConfig}
                />
              )
            default:
              throw new CoffeeActApplicationError(
                `Not Match RouteType(${routeConfig})`
              )
          }
        })}
      </Switch>
    </AnimatePresence>
  )
}
