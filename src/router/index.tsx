import React from 'react'
import { RouteObject, createBrowserRouter, redirect } from 'react-router-dom'
import ErrorPage from '../pages/ErrorPage'
import LoginPage from '../pages/LoginPage'
import { loginAction, loginLoader } from '../pages/LoginPage/helpers'
import Main from '../pages/Main'
import NewsPage from '../pages/NewsPage'
import ProfilePage from '../pages/ProfilePage'
import { store } from '../store'
import { logout } from '../store/actions'
import protectedLoader from './protected'

export const children = [
  {
    id: 'index',
    path: '/',
    Component: Main
  },
  {
    id: 'login',
    path: '/login',
    action: loginAction,
    loader: loginLoader,
    Component: LoginPage
  },
  {
    id: 'news',
    path: '/news',
    Component: NewsPage
  },
  {
    id: 'profile',
    path: '/profile',
    loader: protectedLoader,
    Component: ProfilePage
  }
] as RouteObject[]

const router = createBrowserRouter([
  {
    id: 'root',
    path: '/',
    errorElement: <ErrorPage />,
    loader: () => ({ isAuth: store.getState().auth.isAuth }),
    children
  },
  {
    path: '/logout',
    action: async () => {
      const result = await store.dispatch(logout())
      return result.meta.requestStatus === 'fulfilled' ? redirect('/') : null
    }
  }
])

export default router
