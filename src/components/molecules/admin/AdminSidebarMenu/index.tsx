import React from 'react'

import { SidebarMenu } from '@/components/atoms/admin'

type Props = {}

export const AdminSidebarMenu: React.FC<Props> = ({ children }) => {
  return <SidebarMenu>{children}</SidebarMenu>
}
