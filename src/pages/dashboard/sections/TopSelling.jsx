const products = Array(5).fill({
 name: 'Healthcare Erbology',
 category: 'in Accessories',
 sales: '13,153',
 image: '/heal.png' // лежит в public
})

export default function TopSelling() {
 return (
  <div className="bg-white rounded-2xl shadow-sm p-6">
   <div className="flex justify-between items-center mb-6">
    <h3 className="font-semibold text-gray-900">Top selling products</h3>
    <button className="text-sm text-gray-500 hover:text-gray-700">
     See All →
    </button>
   </div>

   <div className="space-y-5">
    {products.map((p, i) => (
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
  </div>
 )
}
