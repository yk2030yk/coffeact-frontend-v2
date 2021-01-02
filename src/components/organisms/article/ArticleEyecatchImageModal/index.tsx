import React from 'react'

import { ArticleEyecatchCropper } from '@/components/molecules/article'
import { BasicModal } from '@/components/nucleon/ui/BasicModal'
import { useModal } from '@/hooks/store/modal/useModal'

type Props = {}

export const ArticleEyecatchImageModal: React.FC<Props> = () => {
  const { state, close } = useModal('EYECATCH_IMAGE')
  return (
    <BasicModal isOpen={state.isOpen} close={close}>
      <ArticleEyecatchCropper />
    </BasicModal>
  )
}
