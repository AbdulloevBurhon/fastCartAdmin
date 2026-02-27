export default function Checkbox({
 checked = false,
 indeterminate = false,
 onChange
}) {
 return (
  <div
   onClick={onChange}
   className="w-[18px] h-[18px] rounded flex items-center justify-center cursor-pointer flex-shrink-0 transition-all select-none"
   style={{
    background: checked ? '#3b82f6' : 'transparent',
    border: `2px solid ${checked ? '#3b82f6' : '#9ca3af'}`
   }}
  >
   {checked && (
    <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
     <path
      d="M1 3.5L3.8 6.5L9 1"
      stroke="white"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
     />
    </svg>
   )}

   {!checked && indeterminate && (
    <div className="w-2 h-0.5 bg-gray-400 rounded" />
   )}
  </div>
 )
}
