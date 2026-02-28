import { useMemo, useState } from 'react'

const PAGE_SIZE = 10

export function useProductsLogic(initialData) {
 const [products, setProducts] = useState(initialData)
 const [search, setSearch] = useState('')
 const [filter, setFilter] = useState('Newest')
 const [page, setPage] = useState(1)

 const handleSearch = (value) => {
  setSearch(value)
  setPage(1)
 }

 const toggleAll = () => {
  const allSelected = products.every((p) => p.selected)
  setProducts(products.map((p) => ({ ...p, selected: !allSelected })))
 }

 const toggleOne = (idx) => {
  setProducts(
   products.map((p, i) => (i === idx ? { ...p, selected: !p.selected } : p))
  )
 }

 const filtered = useMemo(() => {
  return products.filter(
   (p) =>
    p.name.toLowerCase().includes(search.toLowerCase()) ||
    p.category.toLowerCase().includes(search.toLowerCase())
  )
 }, [products, search])

 const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE))
 const currentPage = Math.min(page, totalPages)

 const paginatedProducts = filtered.slice(
  (currentPage - 1) * PAGE_SIZE,
  currentPage * PAGE_SIZE
 )

 return {
  search,
  filter,
  page: currentPage,
  totalPages,
  filteredLength: filtered.length,
  paginatedProducts,
  setFilter,
  setPage,
  handleSearch,
  toggleAll,
  toggleOne
 }
}
