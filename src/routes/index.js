import { lazy } from 'react'

const Dashboard = lazy(() => import('../pages/Dashboard'))

export const routes = [
  {
    path: '/app/colaboradores',
    component: Dashboard
  },
]
