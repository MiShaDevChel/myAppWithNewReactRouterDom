import { createAsyncThunk } from '@reduxjs/toolkit'
import { authService } from '../services/auth'
import { setLogin, setLogout } from './authSlice'
import { IThunkLoginArgs } from './types'
import { handleError } from './utils'

export const login = createAsyncThunk<unknown, IThunkLoginArgs>(
  'auth/login',
  async ({ username, password }, { rejectWithValue, dispatch }) => {
    try {
      if (!username || !password) {
        throw new Error('Все поля должны быть заполнены')
      }
      await authService.signin()
      if (username === process.env.REACT_APP_ADMIN && password === process.env.REACT_APP_PASSWORD) {
        dispatch(setLogin())
      } else {
        throw new Error('Имя пользователя или пароль введены не верно')
      }
    } catch (error) {
      return rejectWithValue(handleError(error, 'Ошибка при входе'))
    }
  }
)

export const logout = createAsyncThunk<unknown>(
  'auth/logout',
  async (_, { rejectWithValue, dispatch }) => {
    try {
      await authService.signout()
      dispatch(setLogout())
    } catch (error) {
      return rejectWithValue(handleError(error, 'Ошибка при выходе'))
    }
  }
)
