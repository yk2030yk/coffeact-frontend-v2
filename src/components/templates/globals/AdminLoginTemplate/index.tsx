import React from 'react'

import { CommonLayout } from '@/components/layouts/globals/CommonLayout'
import { LoginForm } from '@/components/organisms/global'
import * as S from './styled'

export const AdminLoginTemplate: React.FC = () => {
  return (
    <CommonLayout>
      <S.LoginFormArea>
        <LoginForm />
      </S.LoginFormArea>
    </CommonLayout>
  )
}
