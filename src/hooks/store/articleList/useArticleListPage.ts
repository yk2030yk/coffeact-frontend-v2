import { useEffect } from 'react'
import { useRecoilCallback } from 'recoil'

import { articleListAtomFamily, articleStateAtom } from '@/store/articleList'
import { useFetchNextArticleListTask } from './useFetchArticleListTask'

export const useReset = () =>
  useRecoilCallback(({ snapshot, reset }) => async () => {
    const { count } = await snapshot.getPromise(articleStateAtom)
    for (let i = 0; i < count; i++) {
      reset(articleListAtomFamily(i))
    }
  })

export const useArticleListPage = () => {
  const { run } = useFetchNextArticleListTask()
  const reset = useReset()
  useEffect(() => {
    run()
    return () => {
      reset()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
}
