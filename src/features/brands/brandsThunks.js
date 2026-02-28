import { getBrands } from '@/features/brands/brandsApi'
import { createAsyncThunk } from '@reduxjs/toolkit'

export const fetchBrands = createAsyncThunk(
 'brand/fetchBrands',
 async (_, ThunkAPI) => {
  try {
   const data = await getBrands()
   return data
  } catch (error) {
   return ThunkAPI.rejectWithValue(
    error.response?.data?.message || error.message || 'Something went wrong'
   )
  }
 }
)
