import React from 'react'

import * as S from './styled'
import {
  LoginEmailField,
  LoginPasswordField,
  LoginButtonField,
  LoginErrorMessage,
  LoginLoader,
} from '@/components/molecules/global'
import { useLoginLoadable } from './hooks'

export const LoginForm: React.FC = () => {
  const loadable = useLoginLoadable()

  return (
    <>
      {loadable.type === 'started' ? (
        <LoginLoader />
      ) : (
        <S.CardWrapper>
          <S.Top>LOGIN</S.Top>
          <S.Form>
            <S.FormItem>
              <LoginEmailField />
            </S.FormItem>

            <S.FormItem>
              <LoginPasswordField />
            </S.FormItem>

            <S.FormItem>
              <LoginErrorMessage />
            </S.FormItem>

            <S.FormItem>
              <LoginButtonField />
            </S.FormItem>
          </S.Form>
        </S.CardWrapper>
      )}
    </>
  )
}
