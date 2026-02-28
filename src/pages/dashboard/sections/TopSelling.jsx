import { products1 } from '@/pages/dashboard/data/products'
import Card from '@/shared/ui/Card'

export default function TopSelling() {
 return (
  <Card className="rounded-2xl">
   <div className="flex justify-between items-center mb-6">
    <h3 className="font-semibold text-gray-900">Top selling products</h3>
    <button className="text-sm text-gray-500 hover:text-gray-700">
     See All →
    </button>
   </div>

   <div className="space-y-5">
    {products1.map((p, i) => (
     <div key={i} className="flex items-center gap-4">
      <img
       src={p.image}
       alt={p.name}
       className="w-12 h-12 rounded-xl object-cover border border-gray-200"
      />

      <div className="flex-1">
       <p className="text-sm font-semibold text-gray-800">{p.name}</p>
       <p className="text-xs text-gray-400">{p.category}</p>
      </div>

      <div className="text-right">
       <p className="text-emerald-500 font-semibold text-sm">{p.sales}</p>
       <p className="text-xs text-gray-400">in sales</p>
      </div>
     </div>
    ))}
   </div>
  </Card>
 )
}
