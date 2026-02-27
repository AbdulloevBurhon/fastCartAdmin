import { ChevronDown, Pencil, Search, Trash2 } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'

const FILTER_OPTIONS = ['Newest', 'Oldest', 'By amount', 'By status']

export default function OrdersToolbar({ search, onSearch, filter, onFilter }) {
 const [open, setOpen] = useState(false)
 const dropdownRef = useRef(null)

 // Закрытие при клике вне области
 useEffect(() => {
  function handleClickOutside(e) {
   if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
    setOpen(false)
   }
  }
  document.addEventListener('mousedown', handleClickOutside)
  return () => document.removeEventListener('mousedown', handleClickOutside)
 }, [])

 return (
  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 px-6 py-5 border-b border-gray-100">
   {/* Left side */}
   <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
    {/* Search */}
    <div className="flex items-center gap-2 border border-gray-200 rounded-xl px-4 py-2.5 w-full sm:w-64 focus-within:border-blue-500 transition">
     <Search size={16} className="text-gray-400" />
     <input
      value={search}
      onChange={(e) => onSearch(e.target.value)}
      placeholder="Search..."
      className="outline-none text-sm w-full bg-transparent"
     />
    </div>

    {/* Custom Select */}
    <div ref={dropdownRef} className="relative w-full sm:w-48">
     {/* Floating label */}
     <span className="absolute -top-2 left-3 bg-white px-1 text-xs text-gray-400">
      Filter
     </span>

     <button
      onClick={() => setOpen(!open)}
      className={`
              w-full flex items-center justify-between
              border rounded-xl px-4 py-2.5 text-sm
              transition-all
              ${
               open
                ? 'border-blue-500 ring-2 ring-blue-100'
                : 'border-gray-200 hover:border-gray-300'
              }
            `}
     >
      <span className="text-gray-700">{filter}</span>

      <ChevronDown
       size={16}
       className={`text-gray-400 transition-transform duration-200 ${
        open ? 'rotate-180' : ''
       }`}
      />
     </button>

     {/* Dropdown */}
     <div
      className={`
              absolute left-0 top-full mt-2 w-full
              bg-white border border-gray-200 rounded-xl shadow-lg
              overflow-hidden z-30
              transition-all duration-200 origin-top
              ${open ? 'scale-100 opacity-100' : 'scale-95 opacity-0 pointer-events-none'}
            `}
     >
      {FILTER_OPTIONS.map((opt) => (
       <button
        key={opt}
        onClick={() => {
         onFilter(opt)
         setOpen(false)
        }}
        className={`
                  w-full text-left px-4 py-2.5 text-sm transition-colors
                  ${
                   filter === opt
                    ? 'bg-blue-50 text-blue-600 font-medium'
                    : 'text-gray-600 hover:bg-gray-50'
                  }
                `}
       >
        {opt}
       </button>
      ))}
     </div>
    </div>
   </div>

   {/* Right side */}
   <div className="flex items-center gap-3">
    <button className="w-10 h-10 border border-gray-200 rounded-xl flex items-center justify-center hover:bg-gray-50 transition">
     <Pencil size={16} />
    </button>
    <button className="w-10 h-10 border border-gray-200 rounded-xl flex items-center justify-center hover:bg-red-50 hover:text-red-500 transition">
     <Trash2 size={16} />
    </button>
   </div>
  </div>
 )
}
