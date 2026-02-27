import BackLink from '@/shared/ui/BackLink'
import Button from '@/shared/ui/Button'
import Input from '@/shared/ui/Input'
import { Mail } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

export default function ForgotPasswordPage() {
 const navigate = useNavigate()

 return (
  <>
   <BackLink label="Log in" />

   <h2 className="text-3xl font-semibold mb-8 text-gray-800">
    Forgot password
   </h2>

   <div className="space-y-5">
    <Input type="text" placeholder="Email" leftIcon={<Mail size={18} />} />

    <Button fullWidth onClick={() => navigate('/auth/reset')}>
     Send reset link
    </Button>
   </div>
  </>
 )
}
