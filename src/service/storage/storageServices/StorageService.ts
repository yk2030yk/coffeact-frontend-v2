export interface StorageService {
  delete(path: string): Promise<void>
  put(path: string, file: File | Blob): Promise<void>
  getDownloadURL(path: string): Promise<string>
}
