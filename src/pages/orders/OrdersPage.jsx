// import {
//  ChevronDown,
//  ChevronLeft,
//  ChevronRight,
//  Pencil,
//  Search,
//  Trash2
// } from 'lucide-react'
// import { useState } from 'react'

// function PaymentBadge({ status }) {
//  const paid = status === 'Paid'
//  return (
//   <span
//    className="inline-flex items-center px-3 py-0.5 rounded-md text-xs font-semibold whitespace-nowrap"
//    style={{
//     background: paid ? 'rgba(72,199,142,.13)' : 'rgba(200,170,60,.13)',
//     color: paid ? '#3ecf8e' : '#b08a20',
//     border: `1px solid ${paid ? 'rgba(72,199,142,.28)' : 'rgba(200,170,60,.28)'}`
//    }}
//   >
//    {status}
//   </span>
//  )
// }

// function OrderStatusBadge({ status }) {
//  const cfg = {
//   Ready: {
//    bg: 'rgba(251,146,0,.15)',
//    color: '#d97706',
//    border: 'rgba(251,146,0,.3)'
//   },
//   Shipped: {
//    bg: 'rgba(100,116,139,.13)',
//    color: '#64748b',
//    border: 'rgba(100,116,139,.28)'
//   },
//   Received: {
//    bg: 'rgba(59,130,246,.13)',
//    color: '#3b82f6',
//    border: 'rgba(59,130,246,.28)'
//   }
//  }
//  const c = cfg[status] || cfg.Ready
//  return (
//   <span
//    className="inline-flex items-center px-3 py-0.5 rounded-md text-xs font-semibold whitespace-nowrap"
//    style={{ background: c.bg, color: c.color, border: `1px solid ${c.border}` }}
//   >
//    {status}
//   </span>
//  )
// }

// function Checkbox({ checked, onChange, indeterminate }) {
//  return (
//   <div
//    onClick={onChange}
//    className="w-[18px] h-[18px] rounded flex items-center justify-center cursor-pointer flex-shrink-0 transition-all select-none"
//    style={{
//     background: checked ? '#3b82f6' : 'transparent',
//     border: `2px solid ${checked ? '#3b82f6' : '#9ca3af'}`
//    }}
//   >
//    {checked && (
//     <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
//      <path
//       d="M1 3.5L3.8 6.5L9 1"
//       stroke="white"
//       strokeWidth="1.7"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//      />
//     </svg>
//    )}
//    {!checked && indeterminate && (
//     <div className="w-2 h-0.5 bg-gray-400 rounded" />
//    )}
//   </div>
//  )
// }

// const FILTER_OPTIONS = ['Newest', 'Oldest', 'By amount', 'By status']

// function OrdersToolbar({ search, onSearch, filter, onFilter }) {
//  const [open, setOpen] = useState(false)
//  return (
//   <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 px-4 py-3 border-b border-gray-100">
//    <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2">
//     <div className="flex items-center gap-2 border border-gray-200 rounded-xl px-3 py-2 bg-white hover:border-gray-300 transition w-full sm:w-56">
//      <Search size={14} className="text-gray-400 flex-shrink-0" />
//      <input
//       value={search}
//       onChange={(e) => onSearch(e.target.value)}
//       placeholder="Search..."
//       className="outline-none text-sm text-gray-700 placeholder-gray-400 w-full bg-transparent"
//      />
//     </div>
//     <div className="relative">
//      <label className="absolute -top-2 left-3 text-[10px] text-gray-400 bg-white px-1 leading-none z-10 pointer-events-none">
//       Filter
//      </label>
//      <button
//       onClick={() => setOpen(!open)}
//       className="flex items-center gap-2 border border-gray-200 rounded-xl px-3 py-2 bg-white hover:border-gray-300 transition text-sm text-gray-700 font-medium w-full sm:w-36"
//      >
//       <span className="flex-1 text-left">{filter}</span>
//       <ChevronDown size={14} className="text-gray-400 flex-shrink-0" />
//      </button>
//      {open && (
//       <div className="absolute top-full left-0 mt-1 bg-white border border-gray-200 rounded-xl shadow-lg z-30 min-w-full overflow-hidden">
//        {FILTER_OPTIONS.map((opt) => (
//         <button
//          key={opt}
//          onClick={() => {
//           onFilter(opt)
//           setOpen(false)
//          }}
//          className="block w-full text-left px-4 py-2 text-sm text-gray-600 hover:bg-gray-50 transition-colors"
//         >
//          {opt}
//         </button>
//        ))}
//       </div>
//      )}
//     </div>
//    </div>
//    <div className="flex items-center gap-2">
//     <button className="w-9 h-9 flex items-center justify-center border border-gray-200 rounded-xl text-blue-500 hover:bg-blue-50 hover:border-blue-300 transition-all">
//      <Pencil size={14} />
//     </button>
//     <button className="w-9 h-9 flex items-center justify-center border border-gray-200 rounded-xl text-blue-500 hover:bg-red-50 hover:border-red-300 hover:text-red-500 transition-all">
//      <Trash2 size={14} />
//     </button>
//    </div>
//   </div>
//  )
// }

// const COLS = [
//  'Order',
//  'Date',
//  'Customer',
//  'Payment status',
//  'Order Status',
//  'Total'
// ]

// function OrdersTable({ orders, onToggle, onToggleAll }) {
//  const allSelected = orders.length > 0 && orders.every((o) => o.selected)
//  const someSelected = orders.some((o) => o.selected) && !allSelected
//  return (
//   <div className="overflow-x-auto">
//    <table className="w-full min-w-[680px]">
//     <thead>
//      <tr className="border-b border-gray-100">
//       <th className="py-3 pl-4 pr-2 w-9">
//        <Checkbox
//         checked={allSelected}
//         indeterminate={someSelected}
//         onChange={onToggleAll}
//        />
//       </th>
//       {COLS.map((h) => (
//        <th
//         key={h}
//         className="py-3 px-3 text-left text-xs font-medium text-gray-400 whitespace-nowrap"
//        >
//         {h}
//        </th>
//       ))}
//      </tr>
//     </thead>
//     <tbody>
//      {orders.map((order, i) => {
//       const sel = order.selected
//       return (
//        <tr
//         key={i}
//         className="border-b border-gray-50 last:border-0 transition-colors"
//         style={{ background: sel ? 'rgba(219,234,254,.28)' : 'transparent' }}
//        >
//         <td className="py-3 pl-4 pr-2">
//          <Checkbox checked={sel} onChange={() => onToggle(i)} />
//         </td>
//         <td
//          className="py-3 px-3 text-sm font-semibold"
//          style={{ color: sel ? '#1d4ed8' : '#374151' }}
//         >
//          {order.id}
//         </td>
//         <td
//          className="py-3 px-3 text-sm whitespace-nowrap"
//          style={{ color: sel ? '#374151' : '#9ca3af' }}
//         >
//          {order.date}
//         </td>
//         <td
//          className="py-3 px-3 text-sm"
//          style={{ color: sel ? '#374151' : '#9ca3af' }}
//         >
//          {order.customer}
//         </td>
//         <td className="py-3 px-3">
//          <PaymentBadge status={order.payment} />
//         </td>
//         <td className="py-3 px-3">
//          <OrderStatusBadge status={order.status} />
//         </td>
//         <td
//          className="py-3 px-3 text-sm font-semibold"
//          style={{ color: sel ? '#374151' : '#9ca3af' }}
//         >
//          {order.total}
//         </td>
//        </tr>
//       )
//      })}
//     </tbody>
//    </table>
//   </div>
//  )
// }

// function PaginationBtn({ label, active, disabled, onClick }) {
//  return (
//   <button
//    onClick={onClick}
//    disabled={disabled}
//    className="w-8 h-8 rounded-lg flex items-center justify-center text-sm font-medium transition-all disabled:opacity-30 disabled:cursor-not-allowed flex-shrink-0"
//    style={{
//     background: active ? '#3b82f6' : 'white',
//     color: active ? '#fff' : '#6b7280',
//     border: `1px solid ${active ? '#3b82f6' : '#e5e7eb'}`
//    }}
//   >
//    {label}
//   </button>
//  )
// }

// function Pagination({ current, onChange }) {
//  return (
//   <div className="flex items-center justify-between flex-wrap gap-2">
//    <div className="flex items-center gap-1">
//     <PaginationBtn
//      label={<ChevronLeft size={14} />}
//      disabled={current === 1}
//      onClick={() => onChange(current - 1)}
//     />
//     {[1, 2, 3, 4, 5, 6].map((p) => (
//      <PaginationBtn
//       key={p}
//       label={p}
//       active={current === p}
//       onClick={() => onChange(p)}
//      />
//     ))}
//     <span className="w-8 h-8 flex items-center justify-center text-sm text-gray-400 select-none">
//      …
//     </span>
//     <PaginationBtn
//      label={24}
//      active={current === 24}
//      onClick={() => onChange(24)}
//     />
//     <PaginationBtn
//      label={<ChevronRight size={14} />}
//      disabled={current === 24}
//      onClick={() => onChange(current + 1)}
//     />
//    </div>
//    <span className="text-sm text-gray-400 font-medium">274 Results</span>
//   </div>
//  )
// }

// const INITIAL_ORDERS = [
//  {
//   id: '#12512B',
//   date: 'May 5, 4:20 PM',
//   customer: 'Tom Anderson',
//   payment: 'Paid',
//   status: 'Ready',
//   total: '$49.90',
//   selected: true
//  },
//  {
//   id: '#12523C',
//   date: 'May 5, 4:15 PM',
//   customer: 'Jayden Walker',
//   payment: 'Paid',
//   status: 'Ready',
//   total: '$34.36',
//   selected: true
//  },
//  {
//   id: '#51232A',
//   date: 'May 5, 4:15 PM',
//   customer: 'Inez Kim',
//   payment: 'Paid',
//   status: 'Ready',
//   total: '$5.51',
//   selected: true
//  },
//  {
//   id: '#23534D',
//   date: 'May 5, 4:12 PM',
//   customer: 'Francisco Henry',
//   payment: 'Paid',
//   status: 'Shipped',
//   total: '$29.74',
//   selected: true
//  },
//  {
//   id: '#51323C',
//   date: 'May 5, 4:12 PM',
//   customer: 'Violet Phillips',
//   payment: 'Paid',
//   status: 'Shipped',
//   total: '$23.06',
//   selected: false
//  },
//  {
//   id: '#35622A',
//   date: 'May 5, 4:12 PM',
//   customer: 'Rosetta Becker',
//   payment: 'Paid',
//   status: 'Shipped',
//   total: '$87.44',
//   selected: false
//  },
//  {
//   id: '#34232D',
//   date: 'May 5, 4:10 PM',
//   customer: 'Dean Love',
//   payment: 'Paid',
//   status: 'Ready',
//   total: '$44.55',
//   selected: false
//  },
//  {
//   id: '#56212D',
//   date: 'May 5, 4:08 PM',
//   customer: 'Nettie Tyler',
//   payment: 'Paid',
//   status: 'Ready',
//   total: '$36.79',
//   selected: false
//  },
//  {
//   id: '#23534D',
//   date: 'May 5, 4:04 PM',
//   customer: 'Miguel Harris',
//   payment: 'Pending',
//   status: 'Ready',
//   total: '$50.54',
//   selected: false
//  },
//  {
//   id: '#12523C',
//   date: 'May 5, 4:04 PM',
//   customer: 'Angel Conner',
//   payment: 'Pending',
//   status: 'Ready',
//   total: '$63.47',
//   selected: false
//  },
//  {
//   id: '#51232A',
//   date: 'May 5, 4:03 PM',
//   customer: 'Rosalie Singleton',
//   payment: 'Pending',
//   status: 'Received',
//   total: '$91.63',
//   selected: false
//  }
// ]

// function OrdersContent() {
//  const [orders, setOrders] = useState(INITIAL_ORDERS)
//  const [search, setSearch] = useState('')
//  const [filter, setFilter] = useState('Newest')
//  const [page, setPage] = useState(2)

//  const allSelected = orders.every((o) => o.selected)
//  const toggleAll = () =>
//   setOrders(orders.map((o) => ({ ...o, selected: !allSelected })))
//  const toggleOne = (idx) =>
//   setOrders(
//    orders.map((o, i) => (i === idx ? { ...o, selected: !o.selected } : o))
//   )

//  const filtered = orders.filter(
//   (o) =>
//    o.customer.toLowerCase().includes(search.toLowerCase()) ||
//    o.id.toLowerCase().includes(search.toLowerCase())
//  )

//  return (
//   <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
//    <OrdersToolbar
//     search={search}
//     onSearch={setSearch}
//     filter={filter}
//     onFilter={setFilter}
//    />
//    <OrdersTable
//     orders={filtered}
//     onToggle={toggleOne}
//     onToggleAll={toggleAll}
//    />
//    <div className="px-4 py-3 border-t border-gray-100">
//     <Pagination current={page} onChange={setPage} />
//    </div>
//   </div>
//  )
// }

// export default function OrdersPage() {
//  return (
//   <section className="space-y-4 p-5 bg-gray-50 min-h-screen">
//    <div className="flex items-center justify-between">
//     <h1 className="text-xl font-bold text-blue-900">Orders</h1>
//     <button className="flex items-center gap-1.5 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-xl text-sm font-semibold transition-colors shadow-sm">
//      <span className="text-base leading-none">+</span> Add order
//     </button>
//    </div>
//    <OrdersContent />
//   </section>
//  )
// }

import OrdersContent from '@/widgets/orders/OrdersContent'

export default function OrdersPage() {
 return (
  <section className="space-y-6">
   <div className="flex items-center justify-between">
    <h1 className="text-2xl font-semibold text-gray-900">Orders</h1>

    <button className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-xl text-sm font-semibold transition">
     <span className="text-lg leading-none">+</span>
     Add order
    </button>
   </div>

   <OrdersContent />
  </section>
 )
}
