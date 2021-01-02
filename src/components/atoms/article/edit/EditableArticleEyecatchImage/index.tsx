import React from 'react'
import { useRecoilValue } from 'recoil'

import { StorageImage } from '@/components/nucleon/parts'
import { eyecatchImageAtom } from '@/store/articleForm'
import { useModal } from '@/hooks/store/modal/useModal'
import * as S from './styled'

export const EditableArticleEyecatchImage: React.FC = () => {
  const { open } = useModal('EYECATCH_IMAGE')
  const path = useRecoilValue(eyecatchImageAtom)
  return (
    <S.Wrapper>
      <S.ImageBox>
        <StorageImage path={path} />
        <S.ImageOverLay onClick={() => open()}>
          <p>edit image</p>
        </S.ImageOverLay>
      </S.ImageBox>
    </S.Wrapper>
  )
}
