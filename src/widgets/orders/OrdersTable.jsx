import Checkbox from '@/shared/ui/Checkbox'
import OrderStatusBadge from './badges/OrderStatusBadge'
import PaymentBadge from './badges/PaymentBadge'

const COLS = [
 'Order',
 'Date',
 'Customer',
 'Payment status',
 'Order Status',
 'Total'
]

export default function OrdersTable({ orders, onToggle, onToggleAll }) {
 const allSelected = orders.length && orders.every((o) => o.selected)
 const someSelected = orders.some((o) => o.selected) && !allSelected

 return (
  <div className="overflow-x-auto">
   <table className="w-full min-w-[900px]">
    <thead>
     <tr className="border-b border-gray-100">
      <th className="py-4 pl-6 pr-3">
       <Checkbox
        checked={allSelected}
        indeterminate={someSelected}
        onChange={onToggleAll}
       />
      </th>

      {COLS.map((col) => (
       <th
        key={col}
        className="py-4 px-3 text-left text-sm font-medium text-gray-400"
       >
        {col}
       </th>
      ))}
     </tr>
    </thead>

    <tbody>
     {orders.map((order, i) => (
      <tr
       key={i}
       className="border-b border-gray-50 hover:bg-gray-50 transition"
      >
       <td className="py-4 pl-6 pr-3">
        <Checkbox checked={order.selected} onChange={() => onToggle(i)} />
       </td>

       <td className="px-3 font-semibold">{order.id}</td>
       <td className="px-3 text-gray-500">{order.date}</td>
       <td className="px-3 text-gray-500">{order.customer}</td>
       <td className="px-3">
        <PaymentBadge status={order.payment} />
       </td>
       <td className="px-3">
        <OrderStatusBadge status={order.status} />
       </td>
       <td className="px-3 font-semibold">{order.total}</td>
      </tr>
     ))}
    </tbody>
   </table>
  </div>
 )
}
