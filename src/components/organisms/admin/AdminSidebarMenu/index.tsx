import React from 'react'

import {
  AdminNaviMenu,
  AdminSidebarMenu as Menu,
  AdminSidebarMenuTitle,
} from '@/components/molecules/admin'

export const AdminSidebarMenu: AtomicDesign.Organism<{}> = () => {
  return (
    <Menu>
      <AdminSidebarMenuTitle />
      <AdminNaviMenu />
    </Menu>
  )
}
