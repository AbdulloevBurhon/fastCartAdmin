import { loginRequest } from '@/features/auth/authAPI'
import { createAsyncThunk } from '@reduxjs/toolkit'

export const loginThunk = createAsyncThunk(
 'auth/login',
 async (credentials, thunkAPI) => {
  try {
   const response = await loginRequest(credentials)
   return response.data
  } catch (error) {
   return thunkAPI.rejectWithValue(
    error.response?.data?.message || 'Login Failed'
   )
  }
 }
)
