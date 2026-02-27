import { ArrowLeft } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

export default function BackLink({ to = '/auth/login', label = 'Back' }) {
 const navigate = useNavigate()

 return (
  <button
   onClick={() => navigate(to)}
   className="flex items-center gap-2 text-gray-600 mb-6"
  >
   <ArrowLeft size={16} />
   {label}
  </button>
 )
}
