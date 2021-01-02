import { useEffect } from 'react'
import { useRecoilValue, useSetRecoilState } from 'recoil'

import { globalStateAtom, routeConfigSelector } from '@/store/global'
import { PageRoutesConfig } from '@/components/routes'

export const useRouteConfig = () => useRecoilValue(routeConfigSelector)

export const useSetRouteConfig = (routeConfig: PageRoutesConfig) => {
  const setGlobalState = useSetRecoilState(globalStateAtom)
  useEffect(() => {
    setGlobalState((v) => ({ ...v, routeConfig }))
  }, [setGlobalState, routeConfig])
}
