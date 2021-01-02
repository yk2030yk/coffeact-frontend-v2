import React from 'react'

import defaultArticleImage from '@/assets/images/defaultArticleImage.png'
import { ImageLoader } from '@/components/nucleon/loaders'
import { useDownloadUrl } from '@/hooks/store/service/useStorageService'
import * as S from './styled'

type Props = {
  path: string
  alt?: string
}

export const StorageImage: React.FC<Props> = ({ path, alt = '' }) => {
  const { url, isLoaded } = useDownloadUrl(path)
  return isLoaded ? (
    <S.Img src={url || defaultArticleImage} alt={alt} />
  ) : (
    <ImageLoader />
  )
}
