import { useTaskState } from '@/hooks/store/task/useTaskState'
import { TASKS } from '@/constants/tasks'

export const useLoginLoadable = () => {
  const [loadable] = useTaskState(TASKS.AUTH_LOGIN)
  return loadable
}
