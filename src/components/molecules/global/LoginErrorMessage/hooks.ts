import { useRecoilValue } from 'recoil'

import { authErrorState } from '@/store/auth'

export const useLoginErrorMessage = () => {
  const authError = useRecoilValue(authErrorState)
  return authError
}
