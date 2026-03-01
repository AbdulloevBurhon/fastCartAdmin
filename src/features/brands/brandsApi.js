import { api } from '@/shared/api/axios'

export const getBrands = async () => {
 const response = await api.get('/Brand')
 return response.data.data
}

export const deleteBrandById = async (id) => {
 const response = await api.delete(`/Brand/${id}`)

 return response.data
}

export const createBrand = async (data) => {
 const response = await api.post('/Brand', data)
 return response.data.data
}

export const updateBrand = async (data) => {
 const response = await api.put('/Brand', data)
 return response.data.data
}
