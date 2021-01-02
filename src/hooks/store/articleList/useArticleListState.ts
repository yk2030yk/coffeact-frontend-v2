import { useRecoilValue } from 'recoil'

import { articleStateAtom } from '@/store/articleList'

export const useArticleListState = () => useRecoilValue(articleStateAtom)
