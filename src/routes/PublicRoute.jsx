import { Navigate } from 'react-router-dom'

export default function PublicRoute({ children }) {
 const isAuthenticated = false

 if (isAuthenticated) {
  return <Navigate to="/dashboard" replace />
 }

 return children
}
