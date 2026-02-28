import { products } from '@/pages/dashboard/data/products'
import Card from '@/shared/ui/Card'
import TableWrapper from '@/shared/ui/TableWrapper'

export default function TopProducts() {
 return (
  <Card className="rounded-2xl">
   <h3 className="font-semibold text-gray-900 mb-6">
    Top Products by Units Sold
   </h3>

   <TableWrapper
    headers={['Name', 'Price', 'Units']}
    selectable={false}
    minWidth={500}
   >
    {products.map((p, i) => (
     <tr key={i} className="border-b border-gray-50 last:border-none">
      {/* Name */}
      <td className="py-4 px-3">
       <div className="flex items-center gap-4">
        <img
         src={p.image}
         alt={p.name}
         className="w-12 h-12 rounded-xl object-cover border border-gray-200"
        />
        <span className="text-gray-800 font-medium whitespace-nowrap">
         {p.name}
        </span>
       </div>
      </td>

      {/* Price */}
      <td className="py-4 px-3 text-right text-gray-600 whitespace-nowrap">
       {p.price}
      </td>

      {/* Units */}
      <td className="py-4 px-3 text-right font-semibold text-gray-800 whitespace-nowrap">
       {p.units}
      </td>
     </tr>
    ))}
   </TableWrapper>
  </Card>
 )
}
