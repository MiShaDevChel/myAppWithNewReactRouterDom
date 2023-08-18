import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { login, logout } from './actions'
import { AuthState } from './types'

const setError = (state: AuthState, action: PayloadAction<unknown>) => {
  state.loading = false
  state.error = action.payload as string
}

const setPending = (state: AuthState) => {
  state.loading = true
  state.error = ''
}

const setFulfilled = (state: AuthState) => {
  state.loading = false
  state.error = ''
}

const initialState: AuthState = {
  isAuth: JSON.parse(localStorage.getItem('isAuth') || 'false'),
  error: '',
  loading: false
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setLogin: (state) => {
      state.isAuth = true
      localStorage.setItem('isAuth', 'true')
    },
    setLogout: (state) => {
      state.isAuth = false
      localStorage.setItem('isAuth', 'false')
    }
  },
  extraReducers: (builder) => {
    builder.addCase(login.pending, setPending)
    builder.addCase(login.fulfilled, setFulfilled)
    builder.addCase(login.rejected, setError)
    builder.addCase(logout.pending, setPending)
    builder.addCase(logout.fulfilled, setFulfilled)
    builder.addCase(logout.rejected, setError)
  }
})

export const { setLogin, setLogout } = authSlice.actions
export default authSlice.reducer
