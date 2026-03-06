import { fetchCategories } from '@/features/categories/categoriesThunks'
import { createSlice } from '@reduxjs/toolkit'

export const categoriesSlice = createSlice({
 name: 'categories',
 initialState: {
  categories: [],
  loading: false,
  error: null
 },
 extraReducers: (builder) => {
  builder
   .addCase(fetchCategories.pending, (state) => {
    state.loading = true
    state.error = null
   })
   .addCase(fetchCategories.fulfilled, (state, action) => {
    state.loading = false
    state.error = null
    state.categories = action.payload
   })
   .addCase(fetchCategories.rejected, (state, action) => {
    state.loading = false
    state.error = action.payload
   })
 }
})
export default categoriesSlice.reducer
