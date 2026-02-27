import { useEffect, useRef, useState } from 'react'

export default function Dropdown({
 trigger,
 children,
 align = 'right',
 width = 'w-48'
}) {
 const [isOpen, setIsOpen] = useState(false)
 const dropdownRef = useRef(null)

 useEffect(() => {
  const handleClickOutside = (e) => {
   if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
    setIsOpen(false)
   }
  }

  const handleEsc = (e) => {
   if (e.key === 'Escape') setIsOpen(false)
  }

  document.addEventListener('mousedown', handleClickOutside)
  document.addEventListener('keydown', handleEsc)

  return () => {
   document.removeEventListener('mousedown', handleClickOutside)
   document.removeEventListener('keydown', handleEsc)
  }
 }, [])

 const alignClasses = {
  right: 'right-0',
  left: 'left-0'
 }

 return (
  <div className="relative" ref={dropdownRef}>
   <div onClick={() => setIsOpen(!isOpen)} className="cursor-pointer">
    {trigger}
   </div>

   {isOpen && (
    <div
     className={`absolute mt-3 ${alignClasses[align]} ${width}
          bg-white text-gray-800 rounded-xl shadow-lg overflow-hidden
          animate-[fadeIn_.15s_ease-out]
          z-50`}
    >
     {children({ close: () => setIsOpen(false) })}
    </div>
   )}
  </div>
 )
}
