function FloatingInput({ label, value, onChange, icon }) {
 return (
  <div className="relative">
   <label className="absolute -top-2 left-3 z-10 px-1 bg-white text-xs text-gray-400 leading-none pointer-events-none">
    {label}
   </label>
   <div className="flex items-center border border-gray-200 rounded-xl px-4 py-3 gap-2 focus-within:border-blue-400 transition-colors">
    <input
     value={value}
     onChange={(e) => onChange(e.target.value)}
     className="flex-1 outline-none text-sm text-gray-700 bg-transparent"
    />
    {icon && <span className="text-gray-400 flex-shrink-0">{icon}</span>}
   </div>
  </div>
 )
}

export default FloatingInput
