import { atomFamily, createKey } from '@/lib/recoil'
import { TaskState, TASK_STATE_TYPE } from '@/models/store/Task'

const defaultTaskState: TaskState = {
  type: TASK_STATE_TYPE.pending,
  errorMessage: undefined,
}

export const taskStateAtomFamily = atomFamily<TaskState, string>({
  key: createKey(),
  default: { ...defaultTaskState },
})
