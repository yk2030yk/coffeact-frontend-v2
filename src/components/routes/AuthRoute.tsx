import React from 'react'
import { useRecoilValue } from 'recoil'
import { Redirect, RouteProps } from 'react-router-dom'

import { AppRoute } from './AppRoute'
import { PageRoutesConfig } from '@/components/routes'
import { CoffeeActApplicationError } from '@/errors'
import { SIGN_IN_STATUS, signInState } from '@/store/auth'

import { routes } from './pageRoutes'

type Props = {
  component: React.FC
  routeConfig: PageRoutesConfig
} & RouteProps

export const AuthRoute: React.FC<Props> = ({
  component: Component,
  ...props
}) => {
  const signInStatus = useRecoilValue(signInState)

  switch (signInStatus) {
    case SIGN_IN_STATUS.SIGN_IN:
      return <AppRoute component={Component} {...props} />
    case SIGN_IN_STATUS.SIGN_OUT:
      return <Redirect to={routes.AdminLoginPage.formatPath({})} />
    case SIGN_IN_STATUS.NONE:
      return null
    default:
      throw new CoffeeActApplicationError(
        `signInStatusが不正の値です(${signInStatus})`
      )
  }
}
