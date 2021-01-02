import { atomFamily, createKey } from '@/lib/recoil'

type ModalState = {
  isOpen: boolean
}

export const MODAL_TYPES = {
  EYECATCH_IMAGE: 'EYECATCH_IMAGE',
} as const

export type ModalType = typeof MODAL_TYPES[keyof typeof MODAL_TYPES]

export const modalAtomFamily = atomFamily<ModalState, ModalType>({
  key: createKey(),
  default: {
    isOpen: false,
  },
})
