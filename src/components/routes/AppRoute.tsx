import React from 'react'
import { Route, RouteProps } from 'react-router-dom'
import { motion } from 'framer-motion'

import { PageRoutesConfig } from '@/components/routes'
import { useSetRouteConfig } from '@/hooks/store/global/useRouteConfig'

type Props = {
  component: React.FC
  routeConfig: PageRoutesConfig
} & RouteProps

const pageMotion = {
  initial: 'pageInitial',
  animate: 'pageAnimate',
  variants: {
    pageInitial: {
      opacity: 0,
      y: 10,
    },
    pageAnimate: {
      opacity: 1,
      y: 0,
    },
  },
  transition: { duration: 0.8 },
}

export const AppRoute: React.FC<Props> = ({
  component: Component,
  routeConfig,
  ...props
}) => {
  useSetRouteConfig(routeConfig)
  return (
    <Route {...props}>
      <motion.div {...pageMotion}>
        <Component />
      </motion.div>
    </Route>
  )
}
