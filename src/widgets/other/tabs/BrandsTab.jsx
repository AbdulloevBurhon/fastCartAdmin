import { fetchBrands } from '@/features/brands/brandsThunks'
import Button from '@/shared/ui/Button'
import Input from '@/shared/ui/Input'
import TableWrapper from '@/shared/ui/TableWrapper'
import { Pencil, Trash2 } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

export default function BrandsTab({ onRegisterAction }) {
 const [newBrand, setNewBrand] = useState('')
 const inputRef = useRef(null)
 const dispatch = useDispatch()
 const {
  items: brands,
  isLoading,
  error
 } = useSelector((state) => state.brands)
 console.log(isLoading, error, brands)
 useEffect(() => {
  dispatch(fetchBrands())
 }, [dispatch])
 useEffect(() => {
  onRegisterAction?.(() => {
   inputRef.current?.focus()
  })
 }, [onRegisterAction])

 return (
  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
   <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
    <TableWrapper items={brands} headers={['Brands', 'Action']} minWidth={400}>
     {isLoading ? (
      <tr>
       <td colSpan={2} className="py-6 text-center text-gray-400 text-sm">
        Loading...
       </td>
      </tr>
     ) : error ? (
      <tr>
       <td colSpan={2} className="py-6 text-center text-red-400 text-sm">
        {error}
       </td>
      </tr>
     ) : brands.length === 0 ? (
      <tr>
       <td colSpan={2} className="py-6 text-center text-gray-400 text-sm">
        No brands yet
       </td>
      </tr>
     ) : (
      brands.map((brand) => (
       <tr key={brand.id}>
        <td className="py-3.5 px-3 text-sm font-medium text-blue-500">
         {brand.name}
        </td>
        <td className="py-3.5 px-3 text-right">
         <div className="flex items-center justify-end gap-3">
          <Button variant="ghost" size="icon">
           <Pencil size={15} />
          </Button>
          <Button
           variant="ghost"
           size="icon"
           className="text-red-400 hover:text-red-600"
          >
           <Trash2 size={15} />
          </Button>
         </div>
        </td>
       </tr>
      ))
     )}
    </TableWrapper>
   </div>

   <div className="bg-white rounded-2xl shadow-sm p-6 space-y-4">
    <h3 className="text-lg font-bold text-gray-900">Add new brand</h3>

    <Input
     ref={inputRef}
     value={newBrand}
     onChange={setNewBrand}
     placeholder="Brand name"
    />

    <div className="flex justify-end">
     <Button variant="primary" onClick={() => console.log('Create clicked')}>
      Create
     </Button>
    </div>
   </div>
  </div>
 )
}
