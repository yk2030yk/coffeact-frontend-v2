import React from 'react'
import { Link } from 'react-router-dom'

import { HeaderTitle } from '@/components/atoms/admin'
import { useRouteConfig } from '@/hooks/store/global/useRouteConfig'
import { useRoutes } from '@/hooks/global/routes/useRoutes'

type Props = {}

export const AdminHeaderTitle: AtomicDesign.Molecule<Props> = () => {
  const routeConfig = useRouteConfig()
  const routes = useRoutes()
  return (
    <Link to={routes.AdminHomePage.getPath({})}>
      <HeaderTitle text={routeConfig?.name || ''} />
    </Link>
  )
}
