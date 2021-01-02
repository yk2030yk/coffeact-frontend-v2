import { atom, atomFamily, createKey } from '@/lib/recoil'
import { Article } from '@/models/store/Article'

export const articleStateAtom = atom({
  key: createKey(),
  default: {
    count: 0,
    hasNext: true,
  },
})

export const articleListAtomFamily = atomFamily<Article[], number>({
  key: createKey(),
  default: [],
})
