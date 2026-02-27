import Button from '@/shared/ui/Button'
import Card from '@/shared/ui/Card'
import SearchInput from '@/shared/ui/SearchInput'
import StatusBadge from '@/shared/ui/StatusBadge'
import { Pencil, Trash2 } from 'lucide-react'

export default function OrdersTable() {
 const orders = [
  {
   id: '#12512B',
   date: 'May 5, 4:20 PM',
   customer: 'Tom Anderson',
   payment: 'Paid',
   status: 'Ready',
   total: '$49.90'
  },
  {
   id: '#23534D',
   date: 'May 5, 4:12 PM',
   customer: 'Francisco Henry',
   payment: 'Paid',
   status: 'Shipped',
   total: '$29.74'
  },
  {
   id: '#51232A',
   date: 'May 5, 4:03 PM',
   customer: 'Rosalie Singleton',
   payment: 'Pending',
   status: 'Received',
   total: '$91.63'
  }
 ]

 return (
  <Card>
   <div className="flex items-center justify-between mb-6">
    <div className="flex items-center gap-4">
     <SearchInput className="w-72" />

     <select className="border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500">
      <option>Newest</option>
      <option>Oldest</option>
     </select>
    </div>

    <Button className="w-auto px-5">+ Add order</Button>
   </div>

   <div className="overflow-x-auto">
    <table className="w-full text-left">
     <thead className="border-b">
      <tr className="text-gray-500 text-sm">
       <th className="py-3">Order</th>
       <th>Date</th>
       <th>Customer</th>
       <th>Payment</th>
       <th>Status</th>
       <th>Total</th>
       <th />
      </tr>
     </thead>

     <tbody>
      {orders.map((order) => (
       <tr key={order.id} className="border-b hover:bg-gray-50 transition">
        <td className="py-4 font-medium">{order.id}</td>
        <td>{order.date}</td>
        <td>{order.customer}</td>

        <td>
         <StatusBadge status={order.payment} />
        </td>

        <td>
         <StatusBadge status={order.status} />
        </td>

        <td>{order.total}</td>

        <td className="flex items-center gap-3">
         <Pencil size={16} className="text-blue-600 cursor-pointer" />
         <Trash2 size={16} className="text-red-500 cursor-pointer" />
        </td>
       </tr>
      ))}
     </tbody>
    </table>
   </div>
  </Card>
 )
}
