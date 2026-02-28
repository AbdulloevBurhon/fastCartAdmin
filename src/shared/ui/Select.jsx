import { ChevronDown } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'

export default function Select({
 label,
 value,
 onChange,
 options = [],
 placeholder = 'Select...',
 width = 'w-full',
 className = ''
}) {
 const [open, setOpen] = useState(false)
 const ref = useRef(null)

 useEffect(() => {
  const handleClickOutside = (e) => {
   if (ref.current && !ref.current.contains(e.target)) {
    setOpen(false)
   }
  }

  document.addEventListener('mousedown', handleClickOutside)
  return () => document.removeEventListener('mousedown', handleClickOutside)
 }, [])

 return (
  <div ref={ref} className={`relative ${width} ${className}`}>
   {label && (
    <span className="absolute -top-2 left-3 z-10 px-1 bg-white text-xs text-gray-400">
     {label}
    </span>
   )}

   <button
    type="button"
    onClick={() => setOpen(!open)}
    className={`w-full flex items-center justify-between border rounded-xl px-4 py-2.5 text-sm bg-white transition-all
        ${
         open
          ? 'border-blue-500 ring-2 ring-blue-100'
          : 'border-gray-200 hover:border-gray-300'
        }
      `}
   >
    <span className="text-gray-700">{value || placeholder}</span>

    <ChevronDown
     size={16}
     className={`text-gray-400 transition-transform ${
      open ? 'rotate-180' : ''
     }`}
    />
   </button>

   {open && (
    <div className="absolute left-0 top-full mt-2 w-full bg-white border border-gray-200 rounded-xl shadow-lg z-30 overflow-hidden">
     {options.map((opt) => (
      <button
       key={opt}
       type="button"
       onClick={() => {
        onChange(opt)
        setOpen(false)
       }}
       className={`w-full text-left px-4 py-2.5 text-sm transition-colors
         ${
          value === opt
           ? 'bg-blue-50 text-blue-600 font-medium'
           : 'text-gray-600 hover:bg-gray-50'
         }
        `}
      >
       {opt}
      </button>
     ))}
    </div>
   )}
  </div>
 )
}
