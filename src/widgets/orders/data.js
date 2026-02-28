export const INITIAL_ORDERS = [
 {
  id: '#12512B',
  date: 'May 5, 4:20 PM',
  customer: 'Tom Anderson',
  payment: 'Paid',
  status: 'Ready',
  total: '$49.90',
  selected: true
 },
 {
  id: '#12523C',
  date: 'May 5, 4:15 PM',
  customer: 'Jayden Walker',
  payment: 'Paid',
  status: 'Ready',
  total: '$34.36',
  selected: true
 },
 {
  id: '#51232A',
  date: 'May 5, 4:15 PM',
  customer: 'Inez Kim',
  payment: 'Paid',
  status: 'Ready',
  total: '$5.51',
  selected: true
 },
 {
  id: '#23534D',
  date: 'May 5, 4:12 PM',
  customer: 'Francisco Henry',
  payment: 'Paid',
  status: 'Shipped',
  total: '$29.74',
  selected: true
 },
 {
  id: '#51323C',
  date: 'May 5, 4:12 PM',
  customer: 'Violet Phillips',
  payment: 'Paid',
  status: 'Shipped',
  total: '$23.06',
  selected: false
 },
 {
  id: '#35622A',
  date: 'May 5, 4:12 PM',
  customer: 'Rosetta Becker',
  payment: 'Paid',
  status: 'Shipped',
  total: '$87.44',
  selected: false
 },
 {
  id: '#34232D',
  date: 'May 5, 4:10 PM',
  customer: 'Dean Love',
  payment: 'Paid',
  status: 'Ready',
  total: '$44.55',
  selected: false
 },
 {
  id: '#56212D',
  date: 'May 5, 4:08 PM',
  customer: 'Nettie Tyler',
  payment: 'Paid',
  status: 'Ready',
  total: '$36.79',
  selected: false
 },
 {
  id: '#23534D',
  date: 'May 5, 4:04 PM',
  customer: 'Miguel Harris',
  payment: 'Pending',
  status: 'Ready',
  total: '$50.54',
  selected: false
 },
 {
  id: '#12523C',
  date: 'May 5, 4:04 PM',
  customer: 'Angel Conner',
  payment: 'Pending',
  status: 'Ready',
  total: '$63.47',
  selected: false
 },
 {
  id: '#51232A',
  date: 'May 5, 4:03 PM',
  customer: 'Rosalie Singleton',
  payment: 'Pending',
  status: 'Received',
  total: '$91.63',
  selected: false
 },
 {
  id: '#51232A',
  date: 'May 5, 4:03 PM',
  customer: 'Rosalie Singleton',
  payment: 'Pending',
  status: 'Received',
  total: '$91.63',
  selected: false
 },
 {
  id: '#5123221',
  date: 'May 5, 4:03 PM',
  customer: 'Rosalie Singleton',
  payment: 'Pending',
  status: 'Received',
  total: '$91.63',
  selected: false
 },
 {
  id: '#51232r',
  date: 'May 5, 4:03 PM',
  customer: 'Rosalie Singleton',
  payment: 'Pending',
  status: 'Received',
  total: '$91.63',
  selected: false
 }
]
export const ORDER_HEADERS = [
 'Order',
 'Date',
 'Customer',
 'Payment status',
 'Order Status',
 'Total'
]
import { useMemo, useState } from 'react'

const PAGE_SIZE = 10

export function useOrdersLogic(initialData) {
 const [orders, setOrders] = useState(initialData)
 const [search, setSearch] = useState('')
 const [filter, setFilter] = useState('Newest')
 const [page, setPage] = useState(1)

 const handleSearch = (value) => {
  setSearch(value)
  setPage(1)
 }

 const toggleAll = () => {
  const allSelected = orders.every((o) => o.selected)
  setOrders(orders.map((o) => ({ ...o, selected: !allSelected })))
 }

 const toggleOne = (index) => {
  setOrders(
   orders.map((o, i) => (i === index ? { ...o, selected: !o.selected } : o))
  )
 }

 const filtered = useMemo(() => {
  return orders.filter(
   (o) =>
    o.customer.toLowerCase().includes(search.toLowerCase()) ||
    o.id.toLowerCase().includes(search.toLowerCase())
  )
 }, [orders, search])

 const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE))

 const currentPage = Math.min(page, totalPages)

 const paginatedData = filtered.slice(
  (currentPage - 1) * PAGE_SIZE,
  currentPage * PAGE_SIZE
 )

 return {
  search,
  filter,
  page: currentPage,
  totalPages,
  filteredLength: filtered.length,
  paginatedData,
  setFilter,
  setPage,
  handleSearch,
  toggleAll,
  toggleOne
 }
}
