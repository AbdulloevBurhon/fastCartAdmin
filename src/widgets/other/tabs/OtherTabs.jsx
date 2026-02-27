const TABS = ['Categories', 'Brands', 'Banners']

export default function OtherTabs({ active, onChange }) {
 return (
  <div className="flex items-center gap-2 flex-wrap">
   {TABS.map((tab) => {
    const isActive = tab === active

    return (
     <button
      key={tab}
      onClick={() => onChange(tab)}
      className={`px-5 py-2 rounded-xl text-sm font-semibold transition
              ${
               isActive
                ? 'bg-blue-500 text-white'
                : 'text-gray-400 hover:bg-gray-100'
              }
            `}
     >
      {tab}
     </button>
    )
   })}
  </div>
 )
}
