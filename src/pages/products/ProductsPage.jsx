import ProductsTable from '@/widgets/products/ProductsTable'

export default function ProductsPage() {
 return (
  <>
   <div className="flex items-center justify-between mb-6">
    <h1 className="text-2xl font-semibold">Products</h1>
   </div>

   <ProductsTable />
  </>
 )
}
