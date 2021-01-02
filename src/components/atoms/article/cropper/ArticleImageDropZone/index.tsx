import React from 'react'
import 'react-image-crop/dist/ReactCrop.css'

import { FileDropZone } from '@/components/nucleon/forms'
import { useCropperSrc } from '@/hooks/store/cropper/useCropper'
import * as S from './styled'

type Props = {}

export const ArticleImageDropZone: React.FC<Props> = () => {
  const { setSrc } = useCropperSrc()
  return (
    <S.DropZoneWrapper>
      <FileDropZone
        onDrop={(files) => {
          if (!files) return
          const file = files[0]
          const src = URL.createObjectURL(file)
          setSrc(src)
        }}
      />
    </S.DropZoneWrapper>
  )
}
