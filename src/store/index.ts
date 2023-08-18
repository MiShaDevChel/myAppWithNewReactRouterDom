import { configureStore } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'
import authReducer from './authSlice'
import { AppDispatch } from './types'

export const store = configureStore({
  reducer: {
    auth: authReducer
  }
})

export const useAppDispatch: () => AppDispatch = useDispatch
