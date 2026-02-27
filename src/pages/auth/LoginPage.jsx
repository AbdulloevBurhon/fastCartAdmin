import Button from '@/shared/ui/Button'
import Input from '@/shared/ui/Input'
import { Lock, Mail } from 'lucide-react'

import { Link, useNavigate } from 'react-router-dom'

export default function LoginPage() {
 const navigate = useNavigate()

 return (
  <>
   <h2 className="text-3xl font-semibold mb-8 text-gray-800">Log in</h2>

   <form className="space-y-5">
    <Input
     name="userName"
     type="text"
     placeholder="Username"
     leftIcon={<Mail size={18} />}
    />

    <Input
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

    <Button type="submit" fullWidth onClick={() => navigate('/dashboard')}>
     login
    </Button>
   </form>
  </>
 )
}
