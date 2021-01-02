import { firestore } from 'firebase'

export class FirestoreApiService {
  protected db: firestore.Firestore

  constructor(db: firestore.Firestore) {
    this.db = db
  }
}
