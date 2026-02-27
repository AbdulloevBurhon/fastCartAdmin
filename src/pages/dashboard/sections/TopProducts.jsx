const products = [
 { name: 'Men Grey Hoodie', price: '$49.90', units: 204, image: '/men.png' },
 {
  name: 'Women Striped T-Shirt',
  price: '$34.90',
  units: 155,
  image: '/men.png'
 },
 {
  name: 'Women White T-Shirt',
  price: '$40.90',
  units: 120,
  image: '/men.png'
 },
 { name: 'Men White T-Shirt', price: '$49.90', units: 204, image: '/men.png' },
 { name: 'Women Red T-Shirt', price: '$34.90', units: 155, image: '/men.png' }
]

export default function TopProducts() {
 return (
  <div className="bg-white rounded-2xl shadow-sm p-6">
   <h3 className="font-semibold text-gray-900 mb-6">
    Top Products by Units Sold
   </h3>

   <div className="overflow-x-auto">
    <table className="w-full">
     <thead className="border-b border-gray-100">
      <tr className="text-xs text-gray-400 uppercase">
       <th className="text-left pb-4">Name</th>
       <th className="text-right pb-4">Price</th>
       <th className="text-right pb-4">Units</th>
      </tr>
     </thead>

     <tbody className="text-sm">
      {products.map((p, i) => (
       <tr key={i} className="border-b border-gray-50 last:border-none">
        <td className="py-4">
         <div className="flex items-center gap-4">
          <img
           src={p.image}
           alt={p.name}
           className="w-12 h-12 rounded-xl object-cover border border-gray-200"
          />
          <span className="text-gray-800 font-medium">{p.name}</span>
         </div>
        </td>

        <td className="py-4 text-right text-gray-600">{p.price}</td>

        <td className="py-4 text-right font-semibold text-gray-800">
         {p.units}
        </td>
       </tr>
      ))}
     </tbody>
    </table>
   </div>
  </div>
 )
}
