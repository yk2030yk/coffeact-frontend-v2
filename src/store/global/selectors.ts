import { selector, createKey } from '@/lib/recoil'
import { globalStateAtom } from './atoms'

export const routeConfigSelector = selector({
  key: createKey(),
  get: ({ get }) => get(globalStateAtom).routeConfig,
})
