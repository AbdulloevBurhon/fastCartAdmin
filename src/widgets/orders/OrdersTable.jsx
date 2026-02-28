import Checkbox from '@/shared/ui/Checkbox'
import StatusBadge from '@/shared/ui/StatusBadge'
import TableWrapper from '@/shared/ui/TableWrapper'
import { ORDER_HEADERS } from '@/widgets/orders/data'

export default function OrdersTable({ orders, onToggle, onToggleAll }) {
 return (
  <TableWrapper
   items={orders}
   onToggleAll={onToggleAll}
   headers={ORDER_HEADERS}
   minWidth={900}
   selectable
   rowHover
  >
   {orders.map((order, i) => (
    <tr key={order.id}>
     <td className="py-4 pl-6 pr-3">
      <Checkbox checked={order.selected} onChange={() => onToggle(i)} />
     </td>

     <td className="px-3 font-semibold">{order.id}</td>
     <td className="px-3 text-gray-500">{order.date}</td>
     <td className="px-3 text-gray-500">{order.customer}</td>

     <td className="px-3">
      <StatusBadge type="payment" status={order.payment} />
     </td>

     <td className="px-3">
      <StatusBadge type="order" status={order.status} />
     </td>

     <td className="px-3 font-semibold whitespace-nowrap">{order.total}</td>
    </tr>
   ))}
  </TableWrapper>
 )
}
