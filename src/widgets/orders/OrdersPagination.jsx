import { ChevronLeft, ChevronRight } from 'lucide-react'

function PageButton({ children, active, disabled, onClick }) {
 return (
  <button
   onClick={onClick}
   disabled={disabled}
   className={`
        w-8 h-8 flex items-center justify-center rounded-lg text-sm font-medium transition
        ${
         active
          ? 'bg-blue-600 text-white border border-blue-600'
          : 'bg-white text-gray-600 border border-gray-200 hover:border-blue-400 hover:text-blue-600'
        }
        ${disabled ? 'opacity-40 cursor-not-allowed' : ''}
      `}
  >
   {children}
  </button>
 )
}

function OrdersPagination({ page = 1, onChange }) {
 const totalPages = 24
 const visiblePages = [1, 2, 3, 4, 5, 6]

 return (
  <div className="flex items-center justify-between flex-wrap gap-4">
   {/* Left side */}
   <div className="flex items-center gap-1 flex-wrap">
    <PageButton disabled={page === 1} onClick={() => onChange(page - 1)}>
     <ChevronLeft size={14} />
    </PageButton>

    {visiblePages.map((p) => (
     <PageButton key={p} active={page === p} onClick={() => onChange(p)}>
      {p}
     </PageButton>
    ))}

    <span className="px-2 text-gray-400 text-sm select-none">…</span>

    <PageButton
     active={page === totalPages}
     onClick={() => onChange(totalPages)}
    >
     {totalPages}
    </PageButton>

    <PageButton
     disabled={page === totalPages}
     onClick={() => onChange(page + 1)}
    >
     <ChevronRight size={14} />
    </PageButton>
   </div>

   {/* Right side */}
   <span className="text-sm text-gray-400 font-medium">274 Results</span>
  </div>
 )
}

export default OrdersPagination
