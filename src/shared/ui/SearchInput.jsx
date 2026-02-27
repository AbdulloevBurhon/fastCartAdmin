import { Search } from 'lucide-react'

export default function SearchInput({
 placeholder = 'Search...',
 className = '',
 ...props
}) {
 return (
  <div className="relative">
   <Search size={18} className="absolute left-3 top-3 text-gray-400" />
   <input
    placeholder={placeholder}
    className={`pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${className}`}
    {...props}
   />
  </div>
 )
}
