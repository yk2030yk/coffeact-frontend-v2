export const TASKS = {
  AUTH_LOGIN: 'AUTH_LOGIN',
  AUTH_LOGOUT: 'AUTH_LOGOUT',
  fetchArticle: 'fetchArticle',
  fetchArticleList: 'fetchArticleList',
  CREATE_ARTICLE: 'CREATE_ARTICLE',
  UPDATE_ARTICLE: 'UPDATE_ARTICLE',
  DELETE_ARTICLE: 'DELETE_ARTICLE',
} as const

export type Tasks = typeof TASKS[keyof typeof TASKS]
