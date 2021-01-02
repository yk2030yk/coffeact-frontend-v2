import React from 'react'

import { BasicButton } from '@/components/atoms/common'
import { useUploadImage } from '@/hooks/store/articleForm/useUploadImage'
import { useResetCropper } from '@/hooks/store/cropper/useCropper'
import { useModal } from '@/hooks/store/modal/useModal'

type Props = {}

export const CropCompleteButton: React.FC<Props> = () => {
  const upload = useUploadImage()
  const reset = useResetCropper()
  const { close } = useModal('EYECATCH_IMAGE')
  return (
    <BasicButton
      onClick={() => {
        upload()
        reset()
        close()
      }}
      text="Complete"
    />
  )
}
