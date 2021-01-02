import { useParams } from 'react-router-dom'

import { RouteParams } from '@/components/routes/pageRoutes'
import { CoffeeActApplicationError } from '@/errors'

type ParamKeys = keyof RouteParams
type Params = Partial<RouteParams>

const validateParams = (params: Params, keys: ParamKeys[]) => {
  if (keys.some((key) => !(key in params))) {
    throw new CoffeeActApplicationError('')
  }
}

export const useRouteParams = <T extends ParamKeys>(keys: T[]) => {
  const params = useParams<Params>()

  validateParams(params, keys)

  return params as Required<Pick<Params, T>>
}
