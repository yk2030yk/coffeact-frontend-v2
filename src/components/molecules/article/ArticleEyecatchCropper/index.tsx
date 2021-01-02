import React from 'react'
import 'react-image-crop/dist/ReactCrop.css'

import {
  ArticleImageDropZone,
  ArticleImageCropper,
  CropCompleteButton,
  CropResetButton,
  CropCancelButton,
} from '@/components/atoms/article/cropper'
import { useCropperSrc } from '@/hooks/store/cropper/useCropper'
import * as S from './styled'

type Props = {}

export const ArticleEyecatchCropper: React.FC<Props> = () => {
  const { src } = useCropperSrc()

  return (
    <S.Wrapper>
      {src ? (
        <S.CropModeArea>
          <S.ButtonGroupWrapper>
            <S.ButtonGroup>
              <CropResetButton />
              <CropCompleteButton />
              <CropCancelButton />
            </S.ButtonGroup>
          </S.ButtonGroupWrapper>
          <S.CropperWrapper>
            <ArticleImageCropper />
          </S.CropperWrapper>
        </S.CropModeArea>
      ) : (
        <S.DropZoneModeArea>
          <ArticleImageDropZone />
        </S.DropZoneModeArea>
      )}
    </S.Wrapper>
  )
}
