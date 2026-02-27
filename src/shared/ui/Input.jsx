import { Eye, EyeOff } from 'lucide-react'
import { useState } from 'react'

export default function Input({
 type = 'text',
 size = 'md',
 leftIcon,
 rightIcon,
 passwordToggle = false,
 fullWidth = true,
 className = '',
 ...props
}) {
 const [show, setShow] = useState(false)

 const sizes = {
  sm: 'h-10 text-sm',
  md: 'h-[52px]',
  lg: 'h-14 text-lg'
 }

 const paddingLeft = leftIcon ? 'pl-10' : 'pl-4'
 const paddingRight = rightIcon || passwordToggle ? 'pr-10' : 'pr-4'
 const inputType = passwordToggle ? (show ? 'text' : 'password') : type

 return (
  <div className={`relative ${fullWidth ? 'w-full' : ''}`}>
   {leftIcon && (
    <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
     {leftIcon}
    </div>
   )}

   <input
    type={inputType}
    className={`
          w-full
          ${sizes[size]}
          ${paddingLeft}
          ${paddingRight}
          rounded-lg
          border border-gray-300
          bg-white
          focus:outline-none
          focus:ring-2
          focus:ring-blue-500
          transition
          ${className}
        `}
    {...props}
   />

   {passwordToggle && (
    <button
     type="button"
     onClick={() => setShow(!show)}
     className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
    >
     {show ? <EyeOff size={18} /> : <Eye size={18} />}
    </button>
   )}

   {!passwordToggle && rightIcon && (
    <div className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400">
     {rightIcon}
    </div>
   )}
  </div>
 )
}
