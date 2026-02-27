import { getToken } from '@/shared/lib/auth'
import { Navigate } from 'react-router-dom'

export default function PrivateRoute({ children }) {
 const token = getToken()

 if (!token) {
  return <Navigate to="/auth/login" replace />
 }

 return children
}
