import { atom, createKey } from '@/lib/recoil'
import { PageRoutesConfig } from '@/components/routes'

type GlobalState = {
  routeConfig: PageRoutesConfig | null
}

export const globalStateAtom = atom<GlobalState>({
  key: createKey(),
  default: {
    routeConfig: null,
  },
})
