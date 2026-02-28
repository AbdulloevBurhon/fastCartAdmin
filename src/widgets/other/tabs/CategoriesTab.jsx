import Button from '@/shared/ui/Button'
import Pagination from '@/shared/ui/Pagination'
import SearchInput from '@/shared/ui/SearchInput'
import AddCategoryModal from '@/widgets/other/components/AddCategoryModal'
import { Camera, Pencil } from 'lucide-react'
import { useEffect, useState } from 'react'
import { INIT_CATEGORIES } from '../data/constants'
const PAGE_SIZE = 8

function CategoryCard({ item }) {
 return (
  <div
   className="relative rounded-2xl overflow-hidden group hover:shadow-lg transition-all cursor-pointer"
   style={{ aspectRatio: '1/1', minHeight: 150 }}
  >
   {item.img ? (
    <img
     src={item.img}
     alt={item.name || ''}
     className="w-full h-full object-cover"
    />
   ) : (
    <div className="w-full h-full bg-gray-100 flex items-center justify-center">
     <Camera size={32} className="text-gray-400" strokeWidth={1.4} />
    </div>
   )}

   <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity" />

   <Button
    variant=""
    size="icon"
    className="absolute top-2.5 right-2.5 bg-blue-700 p-1 text-white text-2xl rounded-2xl"
   >
    <Pencil size={13} />
   </Button>

   {item.name && (
    <div className="absolute bottom-0 left-0 right-0 px-3 py-2 bg-gradient-to-t from-black/60 to-transparent">
     <span className="text-white text-xs font-semibold">{item.name}</span>
    </div>
   )}
  </div>
 )
}

export default function CategoriesTab({ onRegisterAction }) {
 const [categories, setCategories] = useState(INIT_CATEGORIES)
 const [search, setSearch] = useState('')
 const [page, setPage] = useState(1)
 const [modal, setModal] = useState(false)

 useEffect(() => {
  setPage(1)
 }, [search])

 // 🔹 регистрируем действие кнопки
 useEffect(() => {
  onRegisterAction?.(() => setModal(true))
 }, [onRegisterAction])

 const filtered = categories.filter(
  (c) => !c.name || c.name.toLowerCase().includes(search.toLowerCase())
 )

 const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE))

 const paginatedCategories = filtered.slice(
  (page - 1) * PAGE_SIZE,
  page * PAGE_SIZE
 )

 const handleAdd = (name, imgUrl) => {
  setCategories((prev) => [
   {
    id: Date.now(),
    name,
    img: imgUrl || `https://picsum.photos/seed/${name}/200/200`,
    hasContent: true
   },
   ...prev
  ])
 }

 return (
  <div className="space-y-4">
   <SearchInput value={search} onChange={setSearch} />

   <div
    className="grid gap-4"
    style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(155px, 1fr))' }}
   >
    {paginatedCategories.map((item) => (
     <CategoryCard key={item.id} item={item} />
    ))}
   </div>

   <div className="bg-white rounded-2xl shadow-sm px-4 py-3">
    <Pagination page={page} totalPages={totalPages} onChange={setPage} />
   </div>

   <AddCategoryModal
    isOpen={modal}
    onClose={() => setModal(false)}
    onAdd={handleAdd}
   />
  </div>
 )
}
