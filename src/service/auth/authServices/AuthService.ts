import { User } from '@/models/store/User'

type OnStateChange = (user: User | null) => void

export interface AuthService {
  login(email: string, password: string): Promise<void>
  logout(): Promise<void>
  onAuthStateChanged: (onStateChange: OnStateChange) => void
}
