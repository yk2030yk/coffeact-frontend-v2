import { useSetRecoilState } from 'recoil'
import { eyecatchImageAtom } from '@/store/articleForm'
import { randomString } from '@/utils/util'
import { usePutImage } from '@/hooks/store/service/useStorageService'
import { useGetCroppedImageBlob } from '@/hooks/store/cropper/useCropper'

export const useUploadImage = () => {
  const getCroppedImageBlob = useGetCroppedImageBlob()
  const setEyecatchImage = useSetRecoilState(eyecatchImageAtom)
  const putImage = usePutImage()

  return async () => {
    try {
      const path = `public/${randomString()}.png`
      const blob = await getCroppedImageBlob()
      if (blob) await putImage(path, blob)
      setEyecatchImage(path)
    } catch (e) {
      //
    }
  }
}
