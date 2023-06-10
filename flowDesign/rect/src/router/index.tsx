import React from 'react'

import { Navigate } from 'react-router-dom'
import type { RouteObject } from 'react-router-dom'

const Index = React.lazy(() => import('@/views/index'))

declare module 'react-router' {
  interface IndexRouteObject {
    meta?: {
      menu?: boolean
      title?: string
      icon?: React.ReactNode
      auth?: boolean
    }
    name?: string
  }
  interface NonIndexRouteObject {
    meta?: {
      menu?: boolean
      title?: string
      icon?: React.ReactNode
      auth?: boolean
    }
    name?: string
  }
}

const routes: RouteObject[] = [
  {
    path: '/',
    element: <Navigate to="/index" />
  },
  {
    path: '/index',
    element: <Index />
  }
]

export default routes
