export const ROUTE_TYPES = {
  STANDARD: 'STANDARD',
  ADMIN: 'ADMIN',
} as const

export type RouteType = typeof ROUTE_TYPES[keyof typeof ROUTE_TYPES]
