export default function Checkbox({ checked, indeterminate, onChange }) {
 return (
  <div
   onClick={onChange}
   className="flex-shrink-0 cursor-pointer select-none transition-all"
   style={{
    width: 18,
    height: 18,
    borderRadius: 4,
    background: checked ? '#3b82f6' : 'transparent',
    border: `2px solid ${checked ? '#3b82f6' : '#9ca3af'}`,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
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
    <div
     style={{ width: 8, height: 2, background: '#9ca3af', borderRadius: 1 }}
    />
   )}
  </div>
 )
}
