import { useCallback } from 'react'
import { useHistory } from 'react-router-dom'

import { useAuthLogin } from '@/hooks/store/auth/useAuthLogin'
import { routes } from '@/components/routes'

const useLoginAfter = () => {
  const history = useHistory()
  return useCallback(() => {
    history.push(routes.AdminHomePage.getPath({}))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
}

export const useLogin = () => {
  const callback = useLoginAfter()
  const { run } = useAuthLogin(callback)
  return run
}
