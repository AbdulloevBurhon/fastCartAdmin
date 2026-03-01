import { loginThunk } from '@/features/auth/authThunks'
import Button from '@/shared/ui/Button'
import Input from '@/shared/ui/Input'
import { Lock, Mail } from 'lucide-react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { Link, useNavigate } from 'react-router-dom'

export default function LoginPage() {
 const navigate = useNavigate()
 const dispatch = useDispatch()
 console.log(import.meta.env.VITE_API_URL)
 const { isLoading, error } = useSelector((state) => state.auth)
 const [formData, setFormData] = useState({
  userName: '',
  password: ''
 })
 const handleChange = (e) => {
  const { name, value } = e.target
  setFormData((prev) => ({
   ...prev,
   [name]: value
  }))
 }
 const handleSubmit = async (e) => {
  e.preventDefault()
  const result = await dispatch(loginThunk(formData))
  console.log(result)
  if (result.meta.requestStatus === 'fulfilled') {
   navigate('/dashboard')
  }
 }

 return (
  <>
   <h2 className="text-3xl font-semibold mb-8 text-gray-800">Log in</h2>

   <form className="space-y-5" onSubmit={handleSubmit}>
    <Input
     onChange={handleChange}
     value={formData.userName}
     name="userName"
     type="text"
     placeholder="Username"
     leftIcon={<Mail size={18} />}
    />

    <Input
     onChange={handleChange}
     value={formData.password}
     name="password"
     type="password"
     placeholder="Password"
     leftIcon={<Lock size={18} />}
     passwordToggle
    />

    <div className="text-right">
     <Link to="/auth/forgot" className="text-sm text-blue-600 hover:underline">
      Forgot password?
     </Link>
    </div>
    {error && <p className="text-red-500 text-sm text-center">{error}</p>}
    <Button type="submit" fullWidth disabled={isLoading}>
     {isLoading ? 'Logging in...' : 'Login'}
    </Button>
   </form>
  </>
 )
}
