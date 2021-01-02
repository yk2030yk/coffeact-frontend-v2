import React from 'react'

import { LoginFormField, LoginFormInput } from '@/components/atoms/global'
import { useLoginEmail } from './hooks'

type Props = {}

export const LoginEmailField: AtomicDesign.Molecule<Props> = () => {
  const { email, setEmail } = useLoginEmail()
  return (
    <LoginFormField
      input={
        <LoginFormInput
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="email"
        />
      }
    />
  )
}
