import { useCallback } from 'react'

import { useAsyncTask } from '@/hooks/store/task/useAsyncTask'
import { useAuthService } from '@/hooks/store/service/useAuthService'
import { TASKS } from '@/constants/tasks'

export const useAuthLogout = (callback?: () => void) => {
  const authService = useAuthService()

  return useAsyncTask({
    taskName: TASKS.AUTH_LOGOUT,
    callback: useCallback(async () => {
      await authService.logout()
      if (callback) callback()
    }, [callback, authService]),
  })
}
