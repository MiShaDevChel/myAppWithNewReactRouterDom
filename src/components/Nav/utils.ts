import { RouteObject } from 'react-router-dom'

export const tabsMap = {
  index: 'На главную',
  news: 'Новости',
  profile: 'Профиль'
} as const

export const createNavItemsData = (routes: RouteObject[]) =>
  routes.filter((route) => route.id !== 'login')
