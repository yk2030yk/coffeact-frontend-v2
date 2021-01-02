import React from 'react'
import Cropper from 'react-easy-crop'
import 'react-image-crop/dist/ReactCrop.css'

import { useCropper, useOnComplete } from '@/hooks/store/cropper/useCropper'
import * as S from './styled'

type Props = {}

export const ArticleImageCropper: React.FC<Props> = () => {
  const { src, crop, setCrop, zoom, setZoom } = useCropper()
  const onCropComplete = useOnComplete()

  return (
    <S.Wrapper>
      <Cropper
        image={src}
        crop={crop}
        zoom={zoom}
        aspect={16 / 8}
        onCropChange={setCrop}
        onCropComplete={onCropComplete}
        onZoomChange={setZoom}
      />
    </S.Wrapper>
  )
}
