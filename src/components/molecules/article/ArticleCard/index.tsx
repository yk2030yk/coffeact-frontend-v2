import React from 'react'
import { Link } from 'react-router-dom'

import * as S from './styled'
import { Article } from '@/models/store/Article'

import {
  ArticleCard as Card,
  ArticleCardEyecatchImage,
  ArticleCardTitle,
  ArticleCardUpdateAt,
} from '@/components/atoms/article'

type Props = {
  article: Article
  to: string
}

export const ArticleCard: React.FC<Props> = ({ article, to }) => {
  return (
    <Link to={to}>
      <Card>
        <S.Wrapper isPublish={article.isPublish}>
          <S.ImageContent>
            <ArticleCardEyecatchImage path={article.eyecatchImage} />
          </S.ImageContent>
          <S.InfoContent>
            <S.InfoItem>
              <ArticleCardUpdateAt updatedAt={article.formatUpdatedAt || ''} />
            </S.InfoItem>
            <S.InfoItem>
              <ArticleCardTitle title={article.title} />
            </S.InfoItem>
          </S.InfoContent>
        </S.Wrapper>
      </Card>
    </Link>
  )
}
