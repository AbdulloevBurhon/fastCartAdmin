import {
 createBrand,
 deleteBrandById,
 getBrands,
 updateBrand
} from '@/features/brands/brandsApi'
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

export const deleteBrand = createAsyncThunk(
 'brand/deleteBrand',
 async (id, ThunkApi) => {
  try {
   await deleteBrandById(id)
   return id
  } catch (error) {
   return ThunkApi.rejectWithValue(
    error.response?.data?.message || error.message || 'Delete Failed'
   )
  }
 }
)

export const createBrandThunk = createAsyncThunk(
 'brand/createBrand',
 async (data, { dispatch, rejectWithValue }) => {
  try {
   await createBrand(data)

   // после успешного создания — обновляем список
   await dispatch(fetchBrands())
  } catch (error) {
   return rejectWithValue(
    error.response?.data?.message || error.message || 'Create Failed'
   )
  }
 }
)

export const updateBrandThunk = createAsyncThunk(
 'brand/updateBrand',
 async (data, { dispatch, rejectWithValue }) => {
  try {
   await updateBrand(data)

   // После успешного обновления — обновляем список
   await dispatch(fetchBrands())
  } catch (error) {
   return rejectWithValue(
    error.response?.data?.message || error.message || 'Update Failed'
   )
  }
 }
)
