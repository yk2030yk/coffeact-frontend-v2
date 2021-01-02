import { User } from '@/models/store/User'
import { atom, createKey } from '@/lib/recoil'

export const SIGN_IN_STATUS = {
  NONE: 'NONE',
  SIGN_IN: 'SIGN_IN',
  SIGN_OUT: 'SIGN_OUT',
}

export const signInState = atom({
  key: createKey(),
  default: SIGN_IN_STATUS.NONE,
})

export const userState = atom<User | null>({
  key: createKey(),
  default: null,
  dangerouslyAllowMutability: true,
})

export const authErrorState = atom<string | null>({
  key: createKey(),
  default: null,
})

export const loginEmailState = atom<string>({
  key: createKey(),
  default: '',
})

export const loginPasswordState = atom<string>({
  key: createKey(),
  default: '',
})
