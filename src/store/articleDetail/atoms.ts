import { atomFamily, createKey } from '@/lib/recoil'
import { Article } from '@/models/store/Article'

export const articleDetailAtomFamily = atomFamily<Article, string>({
  key: createKey(),
  default: new Article(),
})
