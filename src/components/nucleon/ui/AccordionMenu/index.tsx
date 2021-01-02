import React, { useState } from 'react'
import { ExpandLessIcon } from '../../icons'
import * as S from './styled'
import { motion, AnimatePresence } from 'framer-motion'

const useAccordionMenu = (defaultValue: boolean) => {
  const [isOpen, setIsOpen] = useState(defaultValue)

  const toggle = () => setIsOpen((v) => !v)

  return {
    isOpen,
    toggle,
  }
}

type Props = {
  parent: React.ReactElement
  defaultValue?: boolean
}

const motionP = {
  key: 'content',
  initial: 'collapsed',
  animate: 'open',
  exit: 'collapsed',
  variants: {
    open: { opacity: 1, height: 'auto' },
    collapsed: { opacity: 0, height: 0 },
  },
  transition: { duration: 0.8, ease: [0.04, 0.62, 0.23, 0.98] },
}

export const AccordionMenu: AtomicDesign.Nucleon<Props> = ({
  parent,
  children,
  defaultValue = false,
}) => {
  const { isOpen, toggle } = useAccordionMenu(defaultValue)
  return (
    <div>
      <S.MenuItemWrapper onClick={() => toggle()}>
        {parent}
        <S.ExpandIconWrapper>
          <motion.div
            animate={{ rotate: isOpen ? 0 : 180 }}
            transition={{ duration: 0.4 }}
          >
            <ExpandLessIcon color={'#fff'} fontSize={'24px'} />
          </motion.div>
        </S.ExpandIconWrapper>
      </S.MenuItemWrapper>
      <AnimatePresence initial={false}>
        {isOpen && <motion.div {...motionP}>{children}</motion.div>}
      </AnimatePresence>
    </div>
  )
}
