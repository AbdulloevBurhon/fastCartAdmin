import { api } from '@/shared/api/axios'

export const getBrands = async () => {
 const response = await api.get('/Brand')
 return response.data.data
}
