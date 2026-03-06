import authReducer from '@/features/auth/authSlice'
import brandsReducer from '@/features/brands/brandsSlice'
import categoriesReducer from '@/features/categories/categoriesSlice'
import { configureStore } from '@reduxjs/toolkit'
export const store = configureStore({
 reducer: {
  auth: authReducer,
  brands: brandsReducer,
  categories: categoriesReducer
 }
})
