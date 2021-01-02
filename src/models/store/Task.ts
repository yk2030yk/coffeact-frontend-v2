export const TASK_STATE_TYPE = {
  pending: 'pending',
  error: 'error',
  started: 'started',
  success: 'success',
} as const

export type TaskStateType = typeof TASK_STATE_TYPE[keyof typeof TASK_STATE_TYPE]

export type TaskState = {
  type: TaskStateType
  errorMessage: string | undefined
}

export const createTaskState = (
  type: TaskStateType,
  errorMessage?: string
): TaskState => ({
  type,
  errorMessage,
})
