import { auth } from '@/lib/firebase'
import { User } from '@/models/store/User'
import { AuthService } from '../authServices'

export class FirebaseAuthService implements AuthService {
  public async login(email: string, password: string) {
    await auth.signInWithEmailAndPassword(email, password)
  }

  public async logout() {
    await auth.signOut()
  }

  public onAuthStateChanged(onStateChange: (user: User | null) => void) {
    auth.onAuthStateChanged((user) => {
      onStateChange(user ? new User() : null)
    })
  }
}
