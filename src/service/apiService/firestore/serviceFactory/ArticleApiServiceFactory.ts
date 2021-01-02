import { db } from '@/lib/firebase'
import { ArticleRepository } from '../repository/ArticleRepository'
import { ArticleDetailRepository } from '../repository/ArticleDetailRepository'
import { FirestoreArticleApiService } from '../service__exp/FirestoreArticleApiService'

export const articleApiServiceFactory = () => {
  const articleRepository = new ArticleRepository(db)
  const articleDetailRepository = new ArticleDetailRepository(db)
  return new FirestoreArticleApiService(
    articleDetailRepository,
    articleRepository
  )
}
