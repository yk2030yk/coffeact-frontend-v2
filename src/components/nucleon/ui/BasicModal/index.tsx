import React from 'react'
import { motion } from 'framer-motion'

import * as S from './styled'

type Props = {
  isOpen: boolean
  close: () => void
}

export const BasicModal: React.FC<Props> = ({ children, isOpen, close }) => {
  return (
    <motion.div animate={{ opacity: isOpen ? 1 : 0 }}>
      {isOpen && (
        <S.ModalBackground onClick={() => close()} data-testid="background">
          <S.ModalWrapper>
            <S.ModalContent onClick={(e) => e.stopPropagation()}>
              {children}
            </S.ModalContent>
          </S.ModalWrapper>
        </S.ModalBackground>
      )}
    </motion.div>
  )
}
