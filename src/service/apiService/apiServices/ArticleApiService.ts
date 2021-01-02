import { Article } from '@/models/store/Article'

export interface ArticleApiService {
  get(id: string): Promise<Article | undefined>
  getListAll(): Promise<Article[]>
  getPagingList(
    lastItemId: string | undefined,
    limit?: number
  ): Promise<Article[]>
  create(article: Article): Promise<string>
  update(id: string, article: Article): void
  delete(id: string): void
}
