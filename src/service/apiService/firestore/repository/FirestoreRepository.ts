import { firestore } from 'firebase'

export class FirestoreRepository {
  protected db: firestore.Firestore

  constructor(db: firestore.Firestore) {
    this.db = db
  }
}
