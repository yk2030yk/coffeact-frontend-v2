import React from 'react'

import { LoginFormButton } from '@/components/atoms/global'
import { useLogin } from './hooks'

type Props = {}

export const LoginButtonField: AtomicDesign.Molecule<Props> = () => {
  const login = useLogin()
  return <LoginFormButton text="login" onClick={() => login()} />
}
