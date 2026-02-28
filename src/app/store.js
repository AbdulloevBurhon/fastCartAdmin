import authReducer from '@/features/auth/authSlice'
import brandsReducer from '@/features/brands/brandsSlice'
import { configureStore } from '@reduxjs/toolkit'
export const store = configureStore({
 reducer: {
  auth: authReducer,
  brands: brandsReducer
 }
})
