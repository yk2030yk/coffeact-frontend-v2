import { useEffect } from 'react'
import { useSetRecoilState } from 'recoil'

import { signInState, userState, SIGN_IN_STATUS } from '@/store/auth'
import { useAuthService } from '@/hooks/store/service/useAuthService'

export const useOnAuthStateChanged = () => {
  const setSignInStatus = useSetRecoilState(signInState)
  const setUser = useSetRecoilState(userState)
  const authService = useAuthService()

  useEffect(() => {
    authService.onAuthStateChanged((u) => {
      setUser(u)
      setSignInStatus(u ? SIGN_IN_STATUS.SIGN_IN : SIGN_IN_STATUS.SIGN_OUT)
    })
    /* eslint react-hooks/exhaustive-deps: 0 */
  }, [])
}
