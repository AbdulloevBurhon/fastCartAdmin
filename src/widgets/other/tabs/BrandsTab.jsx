import Button from '@/shared/ui/Button'
import Input from '@/shared/ui/Input'
import TableWrapper from '@/shared/ui/TableWrapper'
import { Pencil, Trash2 } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
import { INIT_BRANDS } from '../data/constants'

export default function BrandsTab({ onRegisterAction }) {
 const [brands, setBrands] = useState(INIT_BRANDS)
 const [newBrand, setNewBrand] = useState('')
 const inputRef = useRef(null)

 const handleCreate = () => {
  if (!newBrand.trim()) return
  setBrands((prev) => [...prev, newBrand.trim()])
  setNewBrand('')
 }

 const handleDelete = (index) => {
  setBrands((prev) => prev.filter((_, i) => i !== index))
 }

 // 🔹 регистрируем действие кнопки
 useEffect(() => {
  onRegisterAction?.(() => {
   inputRef.current?.focus()
  })
 }, [onRegisterAction])

 return (
  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
   <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
    <TableWrapper items={brands} headers={['Brands', 'Action']} minWidth={400}>
     {brands.map((brand, i) => (
      <tr key={i}>
       <td className="py-3.5 px-3 text-sm font-medium text-blue-500">
        {brand}
       </td>

       <td className="py-3.5 px-3 text-right">
        <div className="flex items-center justify-end gap-3">
         <Button variant="ghost" size="icon">
          <Pencil size={15} />
         </Button>

         <Button
          variant="ghost"
          size="icon"
          onClick={() => handleDelete(i)}
          className="text-red-400 hover:text-red-600"
         >
          <Trash2 size={15} />
         </Button>
        </div>
       </td>
      </tr>
     ))}
    </TableWrapper>
   </div>

   <div className="bg-white rounded-2xl shadow-sm p-6 space-y-4">
    <h3 className="text-lg font-bold text-gray-900">Add new brand</h3>

    <Input
     ref={inputRef}
     value={newBrand}
     onChange={setNewBrand}
     onKeyDown={(e) => e.key === 'Enter' && handleCreate()}
     placeholder="Brand name"
    />

    <div className="flex justify-end">
     <Button variant="primary" onClick={handleCreate}>
      Create
     </Button>
    </div>
   </div>
  </div>
 )
}
