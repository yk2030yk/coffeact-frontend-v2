import { selector, createKey } from '@/lib/recoil'

import { articleListAtomFamily, articleStateAtom } from './atoms'
import { Article } from '@/models/store/Article'

export const articleListLastItemSelector = selector<Article | undefined>({
  key: createKey(),
  get: ({ get }) => {
    const { count } = get(articleStateAtom)
    const articleList = get(articleListAtomFamily(count - 1))
    return articleList[articleList.length - 1]
  },
})
