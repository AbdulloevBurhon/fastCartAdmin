import {
 createBrandThunk,
 deleteBrand,
 fetchBrands,
 updateBrandThunk
} from '@/features/brands/brandsThunks'
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
   .addCase(deleteBrand.pending, (state) => {
    state.isLoading = true
    state.error = null
   })
   .addCase(deleteBrand.fulfilled, (state, action) => {
    state.isLoading = false
    state.error = null
    state.items = state.items.filter((brand) => brand.id !== action.payload)
   })
   .addCase(deleteBrand.rejected, (state, action) => {
    state.isLoading = false
    state.error = action.payload || 'Delete Failed'
   })
   .addCase(createBrandThunk.pending, (state) => {
    state.isLoading = true
    state.error = null
   })
   .addCase(createBrandThunk.fulfilled, (state) => {
    state.isLoading = false
    state.error = null
    // state.items.unshift(action.payload)
   })
   .addCase(createBrandThunk.rejected, (state, action) => {
    state.isLoading = false
    state.error = action.payload || 'Create Failed'
   })
   .addCase(updateBrandThunk.pending, (state) => {
    state.isLoading = true
    state.error = null
   })
   .addCase(updateBrandThunk.fulfilled, (state) => {
    state.isLoading = false
    state.error = null
   })
   .addCase(updateBrandThunk.rejected, (state, action) => {
    state.isLoading = false
    state.error = action.payload || 'Update Failed'
   })
 }
})
export default brandSlice.reducer
