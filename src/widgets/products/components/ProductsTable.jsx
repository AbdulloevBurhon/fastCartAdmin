import Button from '@/shared/ui/Button'
import Checkbox from '@/shared/ui/Checkbox'
import TableWrapper from '@/shared/ui/TableWrapper'
import { PRODUCT_HEADERS } from '@/widgets/products/data/constants'
import { Pencil, Trash2 } from 'lucide-react'
import InventoryCell from './InventoryCell'
import ProductThumb from './ProductThumb'

export default function ProductsTable({ products, onToggle, onToggleAll }) {
 return (
  <TableWrapper
   items={products}
   onToggleAll={onToggleAll}
   headers={PRODUCT_HEADERS}
   minWidth={600}
   selectable
   rowHover
  >
   {products.map((p, i) => (
    <tr key={p.id}>
     <td className="py-3 pl-6 pr-2">
      <Checkbox checked={p.selected} onChange={() => onToggle(i)} />
     </td>

     <td className="py-3 px-3">
      <div className="flex items-center gap-3">
       <ProductThumb emoji={p.img} bg={p.imgBg} />
       <span className="text-sm font-semibold whitespace-nowrap">{p.name}</span>
      </div>
     </td>

     <td className="py-3 px-3">
      <InventoryCell inventory={p.inventory} type={p.inventoryType} />
     </td>

     <td className="py-3 px-3 text-sm text-gray-500">{p.category}</td>

     <td className="py-3 px-3 text-sm font-semibold whitespace-nowrap">
      {p.price}
     </td>

     <td className="py-3 px-3">
      <div className="flex gap-2">
       <Button variant="icon">
        <Pencil size={15} />
       </Button>

       <Button
        variant="icon"
        className="hover:bg-red-50 hover:border-red-300 hover:text-red-500"
       >
        <Trash2 size={15} />
       </Button>
      </div>
     </td>
    </tr>
   ))}
  </TableWrapper>
 )
}
