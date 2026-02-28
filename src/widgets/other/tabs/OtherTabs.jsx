import { TABS } from '../data/constants'

export default function OtherTabs({ active, onChange }) {
 return (
  <div className="flex items-center gap-0.5">
   {TABS.map((tab) => {
    const on = tab === active
    return (
     <button
      key={tab}
      onClick={() => onChange(tab)}
      className="px-5 py-2 rounded-xl text-sm font-semibold transition-all"
      style={{
       background: on ? '#3b82f6' : 'transparent',
       color: on ? '#fff' : '#9ca3af',
       border: on ? '1px solid #3b82f6' : '1px solid transparent'
      }}
     >
      {tab}
     </button>
    )
   })}
  </div>
 )
}
