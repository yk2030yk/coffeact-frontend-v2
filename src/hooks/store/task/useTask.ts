import { useCallback } from 'react'
import { createTaskState, TASK_STATE_TYPE } from '@/models/store/Task'
import { Tasks } from '@/constants/tasks'
import { useTaskState } from './useTaskState'

export const useTask = <Result, Args extends unknown[]>({
  taskName,
  callback,
}: {
  taskName: Tasks
  callback: (...args: Args) => Promise<Result>
}) => {
  const [taskState, setTaskState] = useTaskState(taskName)

  const start = useCallback(
    () => setTaskState(createTaskState(TASK_STATE_TYPE.started)),
    [setTaskState]
  )

  const success = useCallback(
    () => setTaskState(createTaskState(TASK_STATE_TYPE.success)),
    [setTaskState]
  )

  const error = useCallback(
    (errorMessage: string) =>
      setTaskState(createTaskState(TASK_STATE_TYPE.error, errorMessage)),
    [setTaskState]
  )

  return {
    state: taskState,
    start,
    success,
    error,
    run: callback,
  }
}
