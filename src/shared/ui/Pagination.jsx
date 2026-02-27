function Pagination({ current, onChange }) {
 return (
  <div className="flex items-center justify-between flex-wrap gap-2">
   <div className="flex items-center gap-1 flex-wrap">
    <PBtn
     label={<ChevronLeft size={14} />}
     disabled={current === 1}
     onClick={() => onChange(current - 1)}
    />
    {[1, 2, 3, 4, 5, 6].map((p) => (
     <PBtn
      key={p}
      label={p}
      active={current === p}
      onClick={() => onChange(p)}
     />
    ))}
    <span className="w-8 h-8 flex items-center justify-center text-sm text-gray-400 select-none">
     …
    </span>
    <PBtn label={24} active={current === 24} onClick={() => onChange(24)} />
    <PBtn
     label={<ChevronRight size={14} />}
     disabled={current === 24}
     onClick={() => onChange(current + 1)}
    />
   </div>
   <span className="text-sm text-gray-400 font-medium whitespace-nowrap">
    274 Results
   </span>
  </div>
 )
}
export default Pagination
