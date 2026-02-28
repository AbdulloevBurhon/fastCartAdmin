import { Search } from 'lucide-react'

export default function SearchInput({
 value,
 onChange,
 width = 'w-full sm:w-56'
}) {
 return (
  <div
   className={`flex items-center gap-2 border border-gray-200 rounded-xl px-3 py-2 bg-white hover:border-gray-300 transition-colors ${width}`}
  >
   <Search size={14} className="text-gray-400 flex-shrink-0" />
   <input
    value={value}
    onChange={(e) => onChange(e.target.value)}
    placeholder="Search..."
    className="outline-none text-sm text-gray-700 placeholder-gray-400 w-full bg-transparent"
   />
  </div>
 )
}
