import { selector, createKey } from '@/lib/recoil'
import { signInState, SIGN_IN_STATUS } from './atoms'

export const isSignInSelector = selector({
  key: createKey(),
  get: ({ get }) => get(signInState) === SIGN_IN_STATUS.SIGN_IN,
})
