import { getToken } from '@/shared/lib/auth'
import { Navigate } from 'react-router-dom'

export default function PublicRoute({ children }) {
 const token = getToken()
 if (token) {
  return <Navigate to="/dashboard" replace />
 }

 return children
}
