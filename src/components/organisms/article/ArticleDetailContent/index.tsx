import React from 'react'

import { useArticleDetail } from '@/hooks/store/articleDetail/useArticleDetail'
import { ArticleDetail } from '@/components/molecules/article'
import { useRouteParams } from '@/hooks/utils/useParams'
import * as S from './styled'

type Props = {}

export const ArticleDetailContent: React.FC<Props> = () => {
  const { articleId } = useRouteParams<'articleId'>(['articleId'])
  const article = useArticleDetail(articleId)
  return (
    <S.Wrapper>
      <ArticleDetail article={article} />
    </S.Wrapper>
  )
}
