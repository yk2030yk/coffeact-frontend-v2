import { atom, createKey } from '@/lib/recoil'
import { SideMenu } from '@/models/store/Admin'

export const adminSideMenuAtom = atom<SideMenu>({
  key: createKey(),
  default: {
    open: [],
  },
})
