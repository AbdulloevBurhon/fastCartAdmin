import Card from '@/shared/ui/Card'
import Pagination from '@/shared/ui/Pagination'
import TableToolbar from '@/shared/ui/TableToolbar'
import ProductsTable from '@/widgets/products/components/ProductsTable'
import {
 FILTER_OPTIONS,
 INITIAL_PRODUCTS
} from '@/widgets/products/data/constants'
import { useProductsLogic } from '@/widgets/products/useProductsLogic'

export default function ProductsContent() {
 const {
  search,
  filter,
  page,
  totalPages,
  filteredLength,
  paginatedProducts,
  setFilter,
  setPage,
  handleSearch,
  toggleAll,
  toggleOne
 } = useProductsLogic(INITIAL_PRODUCTS)

 return (
  <Card className="rounded-2xl overflow-hidden p-0">
   <TableToolbar
    search={search}
    onSearch={handleSearch}
    filter={filter}
    onFilter={setFilter}
    filterOptions={FILTER_OPTIONS}
   />

   <ProductsTable
    products={paginatedProducts}
    onToggle={toggleOne}
    onToggleAll={toggleAll}
   />

   {totalPages > 1 && (
    <div className="px-4 py-3 border-t border-gray-100">
     <Pagination
      page={page}
      totalPages={totalPages}
      onChange={setPage}
      showResults
      totalResults={filteredLength}
     />
    </div>
   )}
  </Card>
 )
}
