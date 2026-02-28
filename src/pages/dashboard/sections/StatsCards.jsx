import { stats } from '@/pages/dashboard/data/products'

export default function StatsCards() {
 return (
  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
   {stats.map((item) => (
    <div
     key={item.label}
     className={`rounded-2xl p-6 shadow-sm ${item.bg} flex items-center gap-4`}
    >
     <div
      className={`w-12 h-12 rounded-xl ${item.iconBg} flex items-center justify-center text-xl`}
     >
      📊
     </div>
     <div>
      <p className="text-sm text-gray-500">{item.label}</p>
      <p className="text-2xl font-bold text-gray-800">{item.value}</p>
     </div>
    </div>
   ))}
  </div>
 )
}
