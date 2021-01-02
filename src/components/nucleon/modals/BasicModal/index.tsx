import React from 'react'

import { CloseIcon } from '@/components/nucleon/icons'
import { ModalProps } from '@/hooks/utils/useModal'
import * as S from './styled'

type Props = {
  modal: ModalProps
}

export const BasicModal: React.FC<Props> = ({ children, modal }) => {
  return (
    <>
      {modal.isOpen && (
        <S.ModalBackground
          onClick={() => modal.close()}
          data-testid="background"
        >
          <S.ModalWrapper>
            <S.ModalContent
              onClick={(e) => e.stopPropagation()}
              data-testid="content"
            >
              <S.CloseButtonBox
                onClick={() => modal.close()}
                data-testid="closeButton"
              >
                <CloseIcon size={50} />
              </S.CloseButtonBox>
              {children}
            </S.ModalContent>
          </S.ModalWrapper>
        </S.ModalBackground>
      )}
    </>
  )
}
