import BackLink from '@/shared/ui/BackLink'
import Button from '@/shared/ui/Button'
import Input from '@/shared/ui/Input'
import { Lock } from 'lucide-react'

export default function ResetPasswordPage() {
 return (
  <>
   <BackLink label="Log in" />

   <h2 className="text-3xl font-semibold mb-8 text-gray-800">Reset password</h2>

   <div className="space-y-5">
    <Input
     placeholder="Password"
     leftIcon={<Lock size={18} />}
     passwordToggle
    />

    <Input
     placeholder="Confirm password"
     leftIcon={<Lock size={18} />}
     passwordToggle
    />

    <Button fullWidth>Reset</Button>
   </div>
  </>
 )
}
