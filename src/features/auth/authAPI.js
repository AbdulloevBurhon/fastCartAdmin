import { api } from '@/shared/api/axios'

export const loginRequest = (data) => {
 return api.post('/Account/login', data)
}
