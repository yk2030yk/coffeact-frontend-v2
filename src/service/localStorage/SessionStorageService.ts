export class SessionStorageService<T extends { [key: string]: string }> {
  getItem<R>(key: T[keyof T]): R | null {
    return sessionStorage.getItem(key) as R | null
  }

  setItem(key: T[keyof T], value: string) {
    return sessionStorage.setItem(key, value)
  }

  remove(key: T[keyof T]) {
    return sessionStorage.removeItem(key)
  }
}

export const Keys = {
  ADMIN_SIDE_MENU: 'ADMIN_SIDE_MENU',
} as const

export const sessionStorageService = new SessionStorageService<typeof Keys>()
