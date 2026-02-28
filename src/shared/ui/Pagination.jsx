import { ChevronLeft, ChevronRight } from 'lucide-react'

function PageButton({ children, active, disabled, onClick }) {
 return (
  <button
   onClick={onClick}
   disabled={disabled}
   className={`
        min-w-[28px] md:min-w-[32px]
        h-7 md:h-8 px-2
        flex items-center justify-center
        rounded-lg text-xs md:text-sm font-medium transition
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

export default function Pagination({
 page = 1,
 totalPages = 1,
 onChange,
 showResults = false,
 totalResults = 0
}) {
 const createPages = () => {
  const pages = []
  const delta = 1

  const start = Math.max(2, page - delta)
  const end = Math.min(totalPages - 1, page + delta)

  pages.push(1)

  if (start > 2) pages.push('...')

  for (let i = start; i <= end; i++) {
   pages.push(i)
  }

  if (end < totalPages - 1) pages.push('...')

  if (totalPages > 1) pages.push(totalPages)

  return pages
 }

 const pages = createPages()

 return (
  <div className="flex items-center justify-between w-full">
   <div className="flex items-center gap-1 flex-wrap">
    <PageButton disabled={page === 1} onClick={() => onChange(page - 1)}>
     <ChevronLeft size={14} />
    </PageButton>

    {pages.map((p, i) =>
     p === '...' ? (
      <span key={i} className="px-1 text-gray-400 text-xs md:text-sm">
       …
      </span>
     ) : (
      <PageButton key={p} active={page === p} onClick={() => onChange(p)}>
       {p}
      </PageButton>
     )
    )}

    <PageButton
     disabled={page === totalPages}
     onClick={() => onChange(page + 1)}
    >
     <ChevronRight size={14} />
    </PageButton>
   </div>

   {showResults && (
    <span className="hidden sm:block text-xs md:text-sm text-gray-400 font-medium whitespace-nowrap">
     {totalResults} Results
    </span>
   )}
  </div>
 )
}
