import { ROUTE_TYPES, RouteType } from './routeType'

type Object = Record<string, string>
type Payload<T extends Object> = T
type SearchParams<T extends Object> = T

export type RouteConfig<T extends Object = {}, U extends Object = {}> = {
  name: string
  routeType: RouteType
  path: string
  component: React.FC
  exact: boolean
  formatPath: (payload: Payload<T>) => string
  getPath: (payload: Payload<T>) => string
  searchString: (queryParams: SearchParams<U>) => string
}

export const getPath = <T extends Object>(
  path: string,
  payload: Payload<T>
) => {
  let formatPath = path

  if (!payload) return formatPath

  for (const [key, value] of Object.entries(payload as Exclude<T, undefined>)) {
    const regex = new RegExp(`:${key}`, 'g')
    formatPath = formatPath.replace(regex, value)
  }

  return formatPath
}

export const createSearchString = <T extends Object>(
  queryParams: SearchParams<T>
) => {
  if (!queryParams) return ''

  return (
    '?' +
    Object.entries(queryParams)
      .map(([key, value]) => `${key}=${value}`)
      .join('&')
  )
}

export const createRouteConfig = <
  T extends Object = {},
  U extends Object = {}
>({
  name,
  routeType = ROUTE_TYPES.STANDARD,
  path,
  component,
  exact = true,
}: {
  name: string
  routeType?: RouteType
  path: string
  component: React.FC
  exact?: boolean
}): RouteConfig<T, U> => ({
  name,
  routeType,
  path,
  component,
  exact,
  formatPath: (payload: Payload<T>) => getPath<T>(path, payload),
  getPath: (payload: Payload<T>) => getPath<T>(path, payload),
  searchString: (queryParams: SearchParams<U>) =>
    createSearchString(queryParams),
})
