import { ArticleDetailRepository } from '../repository/ArticleDetailRepository'
import { ArticleRepository } from '../repository/ArticleRepository'

export class FirestoreArticleApiService {
  constructor(
    readonly articleDetailRepository: ArticleDetailRepository,
    readonly articleRepository: ArticleRepository
  ) {}
}
