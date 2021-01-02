import React from 'react'

import { Sidebar } from '@/components/nucleon/parts'

type Props = {}

export const SidebarMenu: AtomicDesign.Atom<Props> = ({ children }) => {
  return <Sidebar>{children}</Sidebar>
}
