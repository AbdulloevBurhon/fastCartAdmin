import { useState } from 'react'

export default function BrandsTab() {
 const [brands, setBrands] = useState(['Samsung', 'Xiaomi', 'LG'])
 const [newBrand, setNewBrand] = useState('')

 const handleAdd = () => {
  if (!newBrand.trim()) return
  setBrands([...brands, newBrand.trim()])
  setNewBrand('')
 }

 return (
  <div className="bg-white rounded-2xl shadow-sm p-6 space-y-4">
   <h2 className="text-lg font-semibold">Brands</h2>

   <ul className="space-y-2">
    {brands.map((brand, i) => (
     <li key={i} className="text-sm text-gray-700">
      {brand}
     </li>
    ))}
   </ul>

   <div className="flex gap-2">
    <input
     value={newBrand}
     onChange={(e) => setNewBrand(e.target.value)}
     className="border rounded-xl px-3 py-2 text-sm flex-1"
    />
    <button
     onClick={handleAdd}
     className="bg-blue-500 text-white px-4 rounded-xl text-sm"
    >
     Add
    </button>
   </div>
  </div>
 )
}
