import { fetchBrands } from '@/features/brands/brandsThunks'
import { createSlice } from '@reduxjs/toolkit'

const brandSlice = createSlice({
 name: 'brands',
 initialState: {
  items: [],
  isLoading: false,
  error: null
 },
 reducers: {},
 extraReducers: (builder) => {
  builder
   .addCase(fetchBrands.pending, (state) => {
    state.isLoading = true
    state.error = null
   })
   .addCase(fetchBrands.fulfilled, (state, action) => {
    state.isLoading = false
    state.error = null
    state.items = action.payload
   })
   .addCase(fetchBrands.rejected, (state, action) => {
    state.isLoading = false
    state.error = action.payload || 'Failed'
   })
 }
})
export default brandSlice.reducer
