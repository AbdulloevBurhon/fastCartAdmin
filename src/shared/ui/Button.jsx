export default function Button({
 children,
 type = 'button',
 variant = 'primary',
 size = 'md',
 leftIcon,
 rightIcon,
 className = '',
 fullWidth = false,
 ...props
}) {
 const base =
  'inline-flex items-center justify-center font-medium transition rounded-lg'

 const variants = {
  primary: 'bg-blue-600 hover:bg-blue-700 text-white',
  secondary: 'bg-gray-100 hover:bg-gray-200 text-gray-800',
  danger: 'bg-red-600 hover:bg-red-700 text-white',
  ghost: 'bg-transparent hover:bg-gray-100 text-gray-700',
  icon: 'bg-transparent hover:bg-white/10 text-inherit rounded-full'
 }

 const sizes = {
  sm: 'h-8 px-3 text-sm',
  md: 'h-10 px-4 text-sm',
  lg: 'h-12 px-6 text-base',
  icon: 'h-9 w-9 p-0'
 }

 return (
  <button
   type={type}
   className={`${base} ${variants[variant]} ${
    variant === 'icon' ? sizes.icon : sizes[size]
   } ${fullWidth ? 'w-full' : ''} ${className}`}
   {...props}
  >
   {leftIcon && <span className="mr-2">{leftIcon}</span>}
   {children}
   {rightIcon && <span className="ml-2">{rightIcon}</span>}
  </button>
 )
}
