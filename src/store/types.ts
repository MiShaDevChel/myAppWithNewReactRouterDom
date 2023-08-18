import { store } from '.'

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export interface AuthState {
  isAuth: boolean
  error: string
  loading: boolean
}

export interface IThunkLoginArgs {
  username: string
  password: string | number
}
