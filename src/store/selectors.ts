import { createSelector } from '@reduxjs/toolkit'
import { RootState } from './types'

const getIsAuth = (state: RootState) => state.auth.isAuth
const getError = (state: RootState) => state.auth.error
const getLoading = (state: RootState) => state.auth.loading

export const selectAuth = createSelector(
  getIsAuth,
  getError,
  getLoading,
  (isAuth, error, loading) => ({
    isAuth,
    error,
    loading
  })
)
