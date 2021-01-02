import { firestore } from 'firebase'

import { FirestoreApiService } from './FirestoreApiService'
import { ArticleApiService } from '../../apiServices'
import { CoffeeActApplicationError } from '@/errors'
import { Article } from '@/models/store/Article'
import { ArticleConverter } from './converter'
import { COLLECTION_NAMES } from './collections'

export class FirestoreArticleApiService
  extends FirestoreApiService
  implements ArticleApiService {
  public async get(id: string) {
    const doc = await this.db
      .collection(COLLECTION_NAMES.ARTICLES)
      .withConverter(ArticleConverter)
      .doc(id)
      .get()
    return doc.data()
  }

  public async getFirstListQuerySnapshot(limit: number) {
    return await this.db
      .collection(COLLECTION_NAMES.ARTICLES)
      .orderBy('createdAt', 'desc')
      .withConverter(ArticleConverter)
      .limit(limit)
  }

  public async getNextListQuerySnapshot(lastItemId: string, limit: number) {
    const lastItem = await this.db
      .collection(COLLECTION_NAMES.ARTICLES)
      .withConverter(ArticleConverter)
      .doc(lastItemId)
      .get()

    return await this.db
      .collection(COLLECTION_NAMES.ARTICLES)
      .orderBy('createdAt', 'desc')
      .startAfter(lastItem)
      .withConverter(ArticleConverter)
      .limit(limit)
  }

  public async getPagingList(pointItemId: string | undefined, limit = 9) {
    const query =
      pointItemId === undefined
        ? await this.getFirstListQuerySnapshot(limit)
        : await this.getNextListQuerySnapshot(pointItemId, limit)

    const querySnapshot = await query.get()

    return querySnapshot.docs.map((doc) => doc.data())
  }

  public async getListAll() {
    const querySnapshot = await this.db
      .collection(COLLECTION_NAMES.ARTICLES)
      .withConverter(ArticleConverter)
      .get()

    return querySnapshot.docs.map((doc) => doc.data())
  }

  public async create(article: Article) {
    const timestamp = firestore.FieldValue.serverTimestamp()
    const data = await this.db.collection(COLLECTION_NAMES.ARTICLES).add({
      ...ArticleConverter.toFirestore(article),
      createdAt: timestamp,
      updatedAt: timestamp,
    })
    return data.id
  }

  public async update(id: string, article: Article) {
    const doc = await this.db
      .collection(COLLECTION_NAMES.ARTICLES)
      .withConverter(ArticleConverter)
      .doc(id)
      .get()

    if (!doc) throw new CoffeeActApplicationError('ドキュメントがありません。')

    const timestamp = firestore.FieldValue.serverTimestamp()
    await doc.ref.update({
      ...ArticleConverter.toFirestore(article),
      updatedAt: timestamp,
    })
  }

  public async delete(id: string) {
    await this.db.collection(COLLECTION_NAMES.ARTICLES).doc(id).delete()
  }
}
