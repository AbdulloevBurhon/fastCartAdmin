import { useState } from 'react'
import OrdersPagination from './OrdersPagination'
import OrdersTable from './OrdersTable'
import OrdersToolbar from './OrdersToolbar'
import { INITIAL_ORDERS } from './data'

export default function OrdersContent() {
 const [orders, setOrders] = useState(INITIAL_ORDERS)
 const [search, setSearch] = useState('')
 const [filter, setFilter] = useState('Newest')
 const [page, setPage] = useState(1)

 const toggleAll = () => {
  const allSelected = orders.every((o) => o.selected)
  setOrders(orders.map((o) => ({ ...o, selected: !allSelected })))
 }

 const toggleOne = (index) => {
  setOrders(
   orders.map((o, i) => (i === index ? { ...o, selected: !o.selected } : o))
  )
 }

 const filtered = orders.filter(
  (o) =>
   o.customer.toLowerCase().includes(search.toLowerCase()) ||
   o.id.toLowerCase().includes(search.toLowerCase())
 )

 return (
  <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
   <OrdersToolbar
    search={search}
    onSearch={setSearch}
    filter={filter}
    onFilter={setFilter}
   />

   <OrdersTable
    orders={filtered}
    onToggle={toggleOne}
    onToggleAll={toggleAll}
   />

   <div className="px-6 py-4 border-t border-gray-100">
    <OrdersPagination page={page} onChange={setPage} />
   </div>
  </div>
 )
}
