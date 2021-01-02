import { useRecoilState } from 'recoil'

import { taskStateAtomFamily } from '@/store/task'
import { Tasks } from '@/constants/tasks'

export const useTaskState = (taskName: Tasks) => {
  const taskStateAtom = taskStateAtomFamily(taskName)
  return useRecoilState(taskStateAtom)
}
