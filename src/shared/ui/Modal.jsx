import { X } from 'lucide-react'
import { useEffect } from 'react'

export default function Modal({
 isOpen,
 onClose,
 children,
 title,
 size = 'md',
 showCloseButton = true
}) {
 useEffect(() => {
  if (!isOpen) return

  const handleEsc = (e) => {
   if (e.key === 'Escape') onClose()
  }

  document.addEventListener('keydown', handleEsc)
  document.body.style.overflow = 'hidden'

  return () => {
   document.removeEventListener('keydown', handleEsc)
   document.body.style.overflow = 'auto'
  }
 }, [isOpen, onClose])

 if (!isOpen) return null

 const sizes = {
  sm: 'max-w-md',
  md: 'max-w-lg',
  lg: 'max-w-2xl',
  xl: 'max-w-4xl'
 }

 return (
  <div
   className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm p-4"
   onClick={onClose}
  >
   <div
    className={`bg-white rounded-2xl shadow-xl w-full ${sizes[size]}`}
    onClick={(e) => e.stopPropagation()}
   >
    {(title || showCloseButton) && (
     <div className="flex items-center justify-between p-6 border-b">
      {title && (
       <h2 className="text-lg font-semibold text-gray-800">{title}</h2>
      )}

      {showCloseButton && (
       <button
        onClick={onClose}
        className="text-gray-400 hover:text-gray-600 transition"
       >
        <X size={20} />
       </button>
      )}
     </div>
    )}

    <div className="p-6">{children}</div>
   </div>
  </div>
 )
}
