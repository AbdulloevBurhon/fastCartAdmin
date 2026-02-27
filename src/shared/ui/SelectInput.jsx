function SelectInput({ label, value, onChange, options }) {
 return (
  <div className="relative">
   {label && (
    <label className="absolute -top-2 left-3 z-10 px-1 bg-white text-xs text-gray-400 leading-none pointer-events-none">
     {label}
    </label>
   )}
   <div className="flex items-center border border-gray-200 rounded-xl px-4 py-3 gap-2 cursor-pointer hover:border-gray-300 transition-colors">
    <span className="flex-1 text-sm text-gray-500">{value || options[0]}</span>
    <ChevronDown size={16} className="text-gray-400 flex-shrink-0" />
   </div>
  </div>
 )
}
export default SelectInput
