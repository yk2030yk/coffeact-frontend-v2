import { useRecoilState } from 'recoil'

import { loginPasswordState } from '@/store/auth'

export const useLoginPassword = () => {
  const [password, setPassword] = useRecoilState(loginPasswordState)

  return {
    password,
    setPassword,
  }
}
