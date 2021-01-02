import { useCallback } from 'react'
import { useSetRecoilState, useRecoilValue, useResetRecoilState } from 'recoil'

import {
  authErrorState,
  loginEmailState,
  loginPasswordState,
} from '@/store/auth'
import { useAsyncTask } from '@/hooks/store/task/useAsyncTask'
import { useAuthService } from '@/hooks/store/service/useAuthService'

import { TASKS } from '@/constants/tasks'

export const useAuthLogin = (callback?: () => void) => {
  const setAuthError = useSetRecoilState(authErrorState)
  const resetAuthError = useResetRecoilState(authErrorState)
  const email = useRecoilValue(loginEmailState)
  const resetEmail = useResetRecoilState(loginEmailState)
  const password = useRecoilValue(loginPasswordState)
  const resetPassword = useResetRecoilState(loginPasswordState)
  const authService = useAuthService()

  return useAsyncTask({
    taskName: TASKS.AUTH_LOGIN,
    callback: useCallback(async () => {
      resetAuthError()
      try {
        await authService.login(email, password)

        if (callback) callback()
        resetEmail()
        resetPassword()
      } catch (e) {
        resetPassword()
        setAuthError('入力された情報が間違っています。')
      }
    }, [
      authService,
      email,
      password,
      callback,
      resetEmail,
      resetPassword,
      setAuthError,
      resetAuthError,
    ]),
  })
}
