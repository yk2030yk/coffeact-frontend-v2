import { useRecoilState } from 'recoil'

import { loginEmailState } from '@/store/auth'

export const useLoginEmail = () => {
  const [email, setEmail] = useRecoilState(loginEmailState)
  return {
    email,
    setEmail,
  }
}
