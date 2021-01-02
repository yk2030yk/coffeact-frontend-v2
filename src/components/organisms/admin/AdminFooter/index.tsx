import React from 'react'

import { Copyright, ExplorerLinkList } from '@/components/molecules/global'
import * as S from './styled'
import { routes } from '@/components/routes'
import { RouteConfig } from '@/components/routes/pageRoutes/routeConfig'

const createLink = (routeConfig: RouteConfig) => ({
  to: routeConfig.getPath({}),
  text: routeConfig.name,
})

const useExplorerLinks = () => {
  const { AboutPage, ProfilePage, HomePage, AdminLoginPage } = routes
  return [
    createLink(HomePage),
    createLink(AboutPage),
    createLink(ProfilePage),
    createLink(AdminLoginPage),
  ]
}

export const AdminFooter: React.FC = () => {
  const links = useExplorerLinks()
  return (
    <S.Footer>
      <S.ExplorerLinkArea>
        <ExplorerLinkList links={links} />
      </S.ExplorerLinkArea>
      <S.CopyrightArea>
        <Copyright />
      </S.CopyrightArea>
    </S.Footer>
  )
}
