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
 const base = 'inline-flex items-center justify-center font-semibold transition'

 const variants = {
  primary: 'bg-blue-600 hover:bg-blue-700 text-white rounded-lg',
  secondary: 'bg-gray-100 hover:bg-gray-200 text-gray-800 rounded-lg',
  danger: 'bg-red-600 hover:bg-red-700 text-white rounded-lg',
  ghost: 'bg-transparent hover:bg-gray-100 text-gray-700 rounded-lg',
  header:
   'bg-blue-500 hover:bg-blue-600 text-white rounded-xl shadow-sm whitespace-nowrap',
  icon:
   'w-9 h-9 flex items-center justify-center border border-gray-200 rounded-xl text-blue-500 hover:bg-blue-50 hover:border-blue-300'
 }

 const sizes = {
  sm: 'h-8 px-3 text-sm',
  md: 'h-10 px-4 text-sm',
  lg: 'h-12 px-6 text-base',
  header: 'px-4 py-2 text-sm'
 }

 return (
  <button
   type={type}
   className={`
        ${base}
        ${variants[variant]}
        ${variant !== 'icon' ? sizes[size] : ''}
        ${fullWidth ? 'w-full' : ''}
        ${className}
      `}
   {...props}
  >
   {leftIcon && <span className="mr-1.5">{leftIcon}</span>}
   {children}
   {rightIcon && <span className="ml-1.5">{rightIcon}</span>}
  </button>
 )
}
