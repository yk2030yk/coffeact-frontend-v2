import { useCallback } from 'react'

import { useTask } from './useTask'
import { Tasks } from '@/constants/tasks'

export const useAsyncTask = <Result, Args extends unknown[]>({
  taskName,
  callback,
}: {
  taskName: Tasks
  callback: (...args: Args) => Promise<Result>
}) => {
  const task = useTask({ taskName, callback })

  const run = useCallback(
    async (...args: Args): Promise<Result> => {
      let result: Result
      task.start()

      try {
        result = await task.run(...args)
        task.success()
        return result
      } catch (e) {
        task.error((e as Error).message)
        throw e
      }
    },
    [task]
  )

  return { run, state: task.state }
}
