import React from 'react'

import * as S from './styled'

import {
  ArticleDetailPaper,
  ArticleDetailEyecatchImage,
  ArticleDetailTitle,
  ArticleDetailUpdatedAt,
  ArticleDetailContent,
} from '@/components/atoms/article'
import { Article } from '@/models/store/Article'

type Props = {
  article: Article
}

export const ArticleDetail: React.FC<Props> = ({ article }) => {
  return (
    <S.Wrapper>
      <ArticleDetailPaper>
        <S.PaperContent>
          <S.DetailImageArea>
            <ArticleDetailEyecatchImage path={article.eyecatchImage} />
          </S.DetailImageArea>

          <S.DetailTopArea>
            <S.DetailTopAreaItem>
              <ArticleDetailTitle title={article.title} />
            </S.DetailTopAreaItem>
            <S.DetailTopAreaItem>
              <ArticleDetailUpdatedAt
                updatedAt={article.formatUpdatedAt || ''}
              />
            </S.DetailTopAreaItem>
          </S.DetailTopArea>

          <S.DetailContentArea>
            <ArticleDetailContent content={article.content} />
          </S.DetailContentArea>
        </S.PaperContent>
      </ArticleDetailPaper>
    </S.Wrapper>
  )
}
