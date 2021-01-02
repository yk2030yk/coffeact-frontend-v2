import React from 'react'

import { BasicButton } from '@/components/atoms/common'
import { useResetCropper } from '@/hooks/store/cropper/useCropper'
import { useModal } from '@/hooks/store/modal/useModal'

type Props = {}

export const CropCancelButton: React.FC<Props> = () => {
  const reset = useResetCropper()
  const { close } = useModal('EYECATCH_IMAGE')
  return (
    <BasicButton
      onClick={() => {
        reset()
        close()
      }}
      text="Cancel"
    />
  )
}
