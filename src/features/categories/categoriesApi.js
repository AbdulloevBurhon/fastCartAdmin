import { api } from '@/shared/api/axios'

export const getCategories = () => {
 return api.get('/Category')
}
