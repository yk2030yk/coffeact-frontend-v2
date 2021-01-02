import React from 'react'

import { BasicButton } from '@/components/atoms/common'
import { useResetCropper } from '@/hooks/store/cropper/useCropper'

type Props = {}

export const CropResetButton: React.FC<Props> = () => {
  const reset = useResetCropper()
  return (
    <BasicButton
      onClick={() => {
        reset()
      }}
      text="Reset"
    />
  )
}
