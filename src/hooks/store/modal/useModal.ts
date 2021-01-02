import { useRecoilState } from 'recoil'
import { modalAtomFamily, ModalType } from '@/store/modal'

export const useModal = (modalType: ModalType) => {
  const [state, setState] = useRecoilState(modalAtomFamily(modalType))

  const open = () => setState((v) => ({ ...v, isOpen: true }))
  const close = () => setState((v) => ({ ...v, isOpen: false }))
  const toggle = () => setState((v) => ({ ...v, isOpen: !v.isOpen }))

  return {
    state,
    open,
    close,
    toggle,
  }
}
