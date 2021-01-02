import React from 'react'

import { LoginFormField, LoginFormInput } from '@/components/atoms/global'
import { useLoginPassword } from './hooks'

type Props = {}

export const LoginPasswordField: AtomicDesign.Molecule<Props> = () => {
  const { password, setPassword } = useLoginPassword()
  return (
    <LoginFormField
      input={
        <LoginFormInput
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="password"
        />
      }
    />
  )
}
