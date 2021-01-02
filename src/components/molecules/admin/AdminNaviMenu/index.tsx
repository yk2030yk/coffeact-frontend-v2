import React from 'react'

import { AdminNaviMenuItem } from '../AdminNaviMenuItem'
import { AdminNaviMenuChildItem } from '../AdminNaviMenuChildItem'
import { HomeIcon, ArticleIcon, SettingIcon } from '@/components/nucleon/icons'
import { AccordionMenu } from '@/components/nucleon/ui/AccordionMenu'
import * as S from './styled'

type Props = {}

const menus = [
  {
    key: 'Dashboard' as const,
    text: 'Dashboard',
    Icon: HomeIcon,
    children: [
      {
        text: 'Home',
        to: '/admin',
      },
    ],
  },
  {
    key: 'Article' as const,
    text: 'Article',
    Icon: ArticleIcon,
    children: [
      {
        text: 'Article List',
        to: '/admin/articles',
      },
      {
        text: 'Article Tag',
        to: '/admin/tags',
      },
    ],
  },
  {
    key: 'Setting' as const,
    text: 'Setting',
    Icon: SettingIcon,
    children: [
      {
        text: 'Home',
        to: '/admin',
      },
      {
        text: 'Home',
        to: '/admin',
      },
      {
        text: 'Home',
        to: '/admin',
      },
    ],
  },
]

export const AdminNaviMenu: React.FC<Props> = () => {
  return (
    <>
      {menus.map((menu) => (
        <AccordionMenu parent={<AdminNaviMenuItem {...menu} />} key={menu.text}>
          <S.ChildrenMenu>
            {menu.children.map((child) => (
              <AdminNaviMenuChildItem {...child} key={child.text} />
            ))}
          </S.ChildrenMenu>
        </AccordionMenu>
      ))}
    </>
  )
}
