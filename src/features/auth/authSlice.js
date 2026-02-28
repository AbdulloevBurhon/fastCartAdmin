import { loginThunk } from '@/features/auth/authThunks'
import { removeToken, setToken } from '@/shared/lib/auth'
import { createSlice } from '@reduxjs/toolkit'

const authSlice = createSlice({
 name: 'auth',
 initialState: {
  user: null,
  token: localStorage.getItem('token') || null,
  isLoading: false,
  error: null
 },
 reducers: {
  logout: (state) => {
   state.token = null
   state.user = null
   removeToken()
  }
 },
 extraReducers: (builder) => {
  builder
   .addCase(loginThunk.pending, (state) => {
    state.isLoading = true
    state.error = null
   })
   .addCase(loginThunk.fulfilled, (state, action) => {
    state.isLoading = false
    state.token = action.payload?.data || null
    state.user = action.payload?.user || null
    if (action.payload?.data) {
     setToken(action.payload.data)
    }
   })
   .addCase(loginThunk.rejected, (state, action) => {
    state.isLoading = false
    state.error = action.payload
   })
 }
})
export const { logout } = authSlice.actions
export default authSlice.reducer
