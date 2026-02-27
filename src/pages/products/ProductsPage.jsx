import {
 ChevronDown,
 ChevronLeft,
 ChevronRight,
 Pencil,
 Search,
 Trash2
} from 'lucide-react'
import { useState } from 'react'

/* ══════════════════════════════════════════════════════════════
   DATA
══════════════════════════════════════════════════════════════ */

const INITIAL_PRODUCTS = [
 {
  name: 'Men Grey Hoodie',
  inventory: '96 in stock',
  inventoryType: 'stock',
  category: 'Hoodies',
  price: '$49.90',
  selected: true,
  img: '🧥',
  imgBg: '#2d2d2d'
 },
 {
  name: 'Women Striped T-Shirt',
  inventory: '56 in stock',
  inventoryType: 'stock',
  category: 'T-Shirt',
  price: '$34.90',
  selected: true,
  img: '👕',
  imgBg: '#1a1a2e'
 },
 {
  name: 'Women White T-Shirt',
  inventory: '78 in stock',
  inventoryType: 'stock',
  category: 'T-Shirt',
  price: '$40.90',
  selected: true,
  img: '👕',
  imgBg: '#e8e8e8'
 },
 {
  name: 'Men White T-Shirt',
  inventory: '32 in stock',
  inventoryType: 'stock',
  category: 'T-Shirt',
  price: '$49.90',
  selected: true,
  img: '👕',
  imgBg: '#d4d4d4'
 },
 {
  name: 'Women Red T-Shirt',
  inventory: '32 in stock',
  inventoryType: 'stock',
  category: 'T-Shirt',
  price: '$34.90',
  selected: true,
  img: '👕',
  imgBg: '#7a1a1a'
 },
 {
  name: 'Men Grey Hoodie',
  inventory: '96 in stock',
  inventoryType: 'stock',
  category: 'Hoodies',
  price: '$49.90',
  selected: false,
  img: '🧥',
  imgBg: '#2d2d2d'
 },
 {
  name: 'Men White T-Shirt',
  inventory: 'Out of Stock',
  inventoryType: 'outstock',
  category: 'T-Shirt',
  price: '$49.90',
  selected: false,
  img: '👕',
  imgBg: '#d4d4d4'
 },
 {
  name: 'Women Red T-Shirt',
  inventory: 'Out of Stock',
  inventoryType: 'outstock',
  category: 'T-Shirt',
  price: '$34.90',
  selected: false,
  img: '👕',
  imgBg: '#7a1a1a'
 }
]

const FILTER_OPTIONS = ['Newest', 'Oldest', 'By price', 'By category']

/* ══════════════════════════════════════════════════════════════
   CHECKBOX
══════════════════════════════════════════════════════════════ */

function Checkbox({ checked, indeterminate, onChange }) {
 return (
  <div
   onClick={onChange}
   className="flex-shrink-0 cursor-pointer select-none transition-all"
   style={{
    width: 18,
    height: 18,
    borderRadius: 4,
    background: checked ? '#3b82f6' : 'transparent',
    border: `2px solid ${checked ? '#3b82f6' : '#9ca3af'}`,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
   }}
  >
   {checked && (
    <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
     <path
      d="M1 3.5L3.8 6.5L9 1"
      stroke="white"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
     />
    </svg>
   )}
   {!checked && indeterminate && (
    <div
     style={{ width: 8, height: 2, background: '#9ca3af', borderRadius: 1 }}
    />
   )}
  </div>
 )
}

/* ══════════════════════════════════════════════════════════════
   INVENTORY BADGE
══════════════════════════════════════════════════════════════ */

function InventoryCell({ inventory, type }) {
 if (type === 'outstock') {
  return (
   <span
    className="inline-flex items-center px-3 py-0.5 rounded-md text-xs font-medium"
    style={{
     background: 'rgba(148,163,184,.12)',
     color: '#94a3b8',
     border: '1px solid rgba(148,163,184,.25)'
    }}
   >
    Out of Stock
   </span>
  )
 }
 return <span className="text-sm text-gray-500">{inventory}</span>
}

/* ══════════════════════════════════════════════════════════════
   PRODUCT THUMBNAIL
══════════════════════════════════════════════════════════════ */

function ProductThumb({ emoji, bg }) {
 return (
  <div
   className="flex-shrink-0 rounded-lg flex items-center justify-center text-xl"
   style={{
    width: 52,
    height: 52,
    background: bg,
    border: '1px solid rgba(0,0,0,.07)'
   }}
  >
   {emoji}
  </div>
 )
}

/* ══════════════════════════════════════════════════════════════
   TOOLBAR
══════════════════════════════════════════════════════════════ */

function ProductsToolbar({ search, onSearch, filter, onFilter }) {
 const [open, setOpen] = useState(false)

 return (
  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 px-4 py-3 border-b border-gray-100">
   {/* Left */}
   <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2">
    {/* Search */}
    <div className="flex items-center gap-2 border border-gray-200 rounded-xl px-3 py-2 bg-white hover:border-gray-300 transition-colors w-full sm:w-56">
     <Search size={14} className="text-gray-400 flex-shrink-0" />
     <input
      value={search}
      onChange={(e) => onSearch(e.target.value)}
      placeholder="Search..."
      className="outline-none text-sm text-gray-700 placeholder-gray-400 w-full bg-transparent"
     />
    </div>

    {/* Filter */}
    <div className="relative">
     <label
      className="absolute -top-2 left-3 z-10 pointer-events-none px-1 bg-white leading-none"
      style={{ fontSize: 10, color: '#9ca3af' }}
     >
      Filter
     </label>
     <button
      onClick={() => setOpen(!open)}
      className="flex items-center gap-2 border border-gray-200 rounded-xl px-3 py-2 bg-white hover:border-gray-300 transition-colors text-sm font-medium text-gray-700 w-full sm:w-36"
     >
      <span className="flex-1 text-left">{filter}</span>
      <ChevronDown size={14} className="text-gray-400 flex-shrink-0" />
     </button>
     {open && (
      <div className="absolute top-full left-0 mt-1 bg-white border border-gray-200 rounded-xl shadow-lg z-30 overflow-hidden min-w-full">
       {FILTER_OPTIONS.map((opt) => (
        <button
         key={opt}
         onClick={() => {
          onFilter(opt)
          setOpen(false)
         }}
         className="block w-full text-left px-4 py-2 text-sm text-gray-600 hover:bg-gray-50 transition-colors"
        >
         {opt}
        </button>
       ))}
      </div>
     )}
    </div>
   </div>

   {/* Right: action icons */}
   <div className="flex items-center gap-2">
    <button className="w-9 h-9 flex items-center justify-center border border-gray-200 rounded-xl text-blue-500 hover:bg-blue-50 hover:border-blue-300 transition-all">
     <Pencil size={14} />
    </button>
    <button className="w-9 h-9 flex items-center justify-center border border-gray-200 rounded-xl text-blue-500 hover:bg-red-50 hover:border-red-300 hover:text-red-500 transition-all">
     <Trash2 size={14} />
    </button>
   </div>
  </div>
 )
}

/* ══════════════════════════════════════════════════════════════
   TABLE
══════════════════════════════════════════════════════════════ */

function ProductsTable({ products, onToggle, onToggleAll }) {
 const allSelected = products.length > 0 && products.every((p) => p.selected)
 const someSelected = products.some((p) => p.selected) && !allSelected

 return (
  <div className="overflow-x-auto">
   <table className="w-full min-w-[600px]">
    <thead>
     <tr className="border-b border-gray-100">
      <th className="py-3 pl-4 pr-2 w-9">
       <Checkbox
        checked={allSelected}
        indeterminate={someSelected}
        onChange={onToggleAll}
       />
      </th>
      {['Product', 'Inventory', 'Category', 'Price', 'Action'].map((h) => (
       <th
        key={h}
        className="py-3 px-3 text-left text-xs font-medium text-gray-400 whitespace-nowrap"
       >
        {h}
       </th>
      ))}
     </tr>
    </thead>

    <tbody>
     {products.map((p, i) => {
      const sel = p.selected
      return (
       <tr
        key={i}
        className="border-b border-gray-50 last:border-0 transition-colors"
        style={{ background: sel ? 'rgba(219,234,254,.28)' : 'transparent' }}
       >
        {/* Checkbox */}
        <td className="py-3 pl-4 pr-2">
         <Checkbox checked={sel} onChange={() => onToggle(i)} />
        </td>

        {/* Product */}
        <td className="py-3 px-3">
         <div className="flex items-center gap-3">
          <ProductThumb emoji={p.img} bg={p.imgBg} />
          <span
           className="text-sm font-semibold whitespace-nowrap"
           style={{ color: sel ? '#1d4ed8' : '#374151' }}
          >
           {p.name}
          </span>
         </div>
        </td>

        {/* Inventory */}
        <td className="py-3 px-3">
         <InventoryCell inventory={p.inventory} type={p.inventoryType} />
        </td>

        {/* Category */}
        <td
         className="py-3 px-3 text-sm"
         style={{ color: sel ? '#374151' : '#9ca3af' }}
        >
         {p.category}
        </td>

        {/* Price */}
        <td
         className="py-3 px-3 text-sm font-semibold"
         style={{ color: sel ? '#374151' : '#9ca3af' }}
        >
         {p.price}
        </td>

        {/* Action */}
        <td className="py-3 px-3">
         <div className="flex items-center gap-3">
          <button className="text-blue-500 hover:text-blue-700 transition-colors">
           <Pencil size={15} />
          </button>
          <button className="text-red-400 hover:text-red-600 transition-colors">
           <Trash2 size={15} />
          </button>
         </div>
        </td>
       </tr>
      )
     })}
    </tbody>
   </table>
  </div>
 )
}

/* ══════════════════════════════════════════════════════════════
   PAGINATION
══════════════════════════════════════════════════════════════ */

function PaginationBtn({ label, active, disabled, onClick }) {
 return (
  <button
   onClick={onClick}
   disabled={disabled}
   className="flex-shrink-0 flex items-center justify-center rounded-lg text-sm font-medium transition-all disabled:opacity-30 disabled:cursor-not-allowed"
   style={{
    width: 32,
    height: 32,
    background: active ? '#3b82f6' : '#fff',
    color: active ? '#fff' : '#6b7280',
    border: `1px solid ${active ? '#3b82f6' : '#e5e7eb'}`
   }}
  >
   {label}
  </button>
 )
}

function Pagination({ current, onChange }) {
 return (
  <div className="flex items-center justify-between flex-wrap gap-2">
   <div className="flex items-center gap-1 flex-wrap">
    <PaginationBtn
     label={<ChevronLeft size={14} />}
     disabled={current === 1}
     onClick={() => onChange(current - 1)}
    />
    {[1, 2, 3, 4, 5, 6].map((p) => (
     <PaginationBtn
      key={p}
      label={p}
      active={current === p}
      onClick={() => onChange(p)}
     />
    ))}
    <span className="w-8 h-8 flex items-center justify-center text-sm text-gray-400 select-none">
     …
    </span>
    <PaginationBtn
     label={24}
     active={current === 24}
     onClick={() => onChange(24)}
    />
    <PaginationBtn
     label={<ChevronRight size={14} />}
     disabled={current === 24}
     onClick={() => onChange(current + 1)}
    />
   </div>
   <span className="text-sm text-gray-400 font-medium whitespace-nowrap">
    274 Results
   </span>
  </div>
 )
}

/* ══════════════════════════════════════════════════════════════
   PRODUCTS CONTENT  (state lives here)
══════════════════════════════════════════════════════════════ */

function ProductsContent() {
 const [products, setProducts] = useState(INITIAL_PRODUCTS)
 const [search, setSearch] = useState('')
 const [filter, setFilter] = useState('Newest')
 const [page, setPage] = useState(2)

 const allSelected = products.every((p) => p.selected)

 const toggleAll = () =>
  setProducts(products.map((p) => ({ ...p, selected: !allSelected })))

 const toggleOne = (idx) =>
  setProducts(
   products.map((p, i) => (i === idx ? { ...p, selected: !p.selected } : p))
  )

 const filtered = products.filter(
  (p) =>
   p.name.toLowerCase().includes(search.toLowerCase()) ||
   p.category.toLowerCase().includes(search.toLowerCase())
 )

 return (
  <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
   <ProductsToolbar
    search={search}
    onSearch={setSearch}
    filter={filter}
    onFilter={setFilter}
   />
   <ProductsTable
    products={filtered}
    onToggle={toggleOne}
    onToggleAll={toggleAll}
   />
   <div className="px-4 py-3 border-t border-gray-100">
    <Pagination current={page} onChange={setPage} />
   </div>
  </div>
 )
}

/* ══════════════════════════════════════════════════════════════
   PAGE
══════════════════════════════════════════════════════════════ */

export default function ProductsPage() {
 return (
  <section className="space-y-4 p-5 bg-gray-50 min-h-screen">
   {/* Header */}
   <div className="flex items-center justify-between">
    <h1 className="text-xl font-bold text-blue-900">Products</h1>
    <button className="flex items-center gap-1.5 bg-blue-500 hover:bg-blue-600 active:bg-blue-700 text-white px-4 py-2 rounded-xl text-sm font-semibold transition-colors shadow-sm">
     <span className="text-base leading-none">+</span>
     Add order
    </button>
   </div>

   {/* Content */}
   <ProductsContent />
  </section>
 )
}
