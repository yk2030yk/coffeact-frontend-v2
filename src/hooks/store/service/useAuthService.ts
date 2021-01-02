import { useRecoilValue } from 'recoil'

import { authServiceAtom } from '@/store/service'

export const useAuthService = () => {
  return useRecoilValue(authServiceAtom)
}
