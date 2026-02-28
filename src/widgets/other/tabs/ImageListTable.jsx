import Button from '@/shared/ui/Button'
import TableWrapper from '@/shared/ui/TableWrapper'
import { Trash2 } from 'lucide-react'

export default function ImageListTable({ items, onDelete }) {
 return (
  <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
   <TableWrapper
    items={items}
    headers={['Image', 'Name', 'Action']}
    minWidth={500}
    rowHover
   >
    {items.map((item) => (
     <tr key={item.id}>
      <td className="py-3 px-3">
       <div className="w-10 h-10 rounded-lg bg-gray-800 flex items-center justify-center text-lg">
        {item.img}
       </div>
      </td>

      <td className="py-3 px-3 text-sm text-blue-500">{item.name}</td>

      <td className="py-3 px-3 text-right">
       <Button
        variant="ghost"
        size="icon"
        onClick={() => onDelete(item.id)}
        className="text-gray-400 hover:text-red-500"
       >
        <Trash2 size={15} />
       </Button>
      </td>
     </tr>
    ))}
   </TableWrapper>
  </div>
 )
}
