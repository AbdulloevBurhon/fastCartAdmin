import { getCategories } from '@/features/categories/categoriesApi'
import { createAsyncThunk } from '@reduxjs/toolkit'

export const fetchCategories = createAsyncThunk(
 'categories/fetchCategories',
 async (__, { rejectWithValue }) => {
  try {
   const response = await getCategories()
   return response.data.data
  } catch (error) {
   return rejectWithValue(error.response?.data || 'Something went wrong')
  }
 }
)
