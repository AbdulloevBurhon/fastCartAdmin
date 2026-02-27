import { useRef, useState } from 'react'
import { Pagination } from '../../../shared/ui/Pagination'
import { SearchInput } from '../../../shared/ui/SearchInput'
import { INIT_CATEGORIES } from '../banners/banners.data'
import { AddCategoryModal } from '../categories/AddCategoryModal'
import { CategoryCard } from '../categories/CategoryCard'

export function CategoriesTab({ onAddNew }) {
 const [categories, setCategories] = useState(INIT_CATEGORIES)
 const [search, setSearch] = useState('')
 const [page, setPage] = useState(2)
 const [modal, setModal] = useState(false)

 const filtered = categories.filter(
  (c) => !c.name || c.name.toLowerCase().includes(search.toLowerCase())
 )

 const handleAdd = (name, imgUrl) => {
  const newCat = {
   id: Date.now(),
   name,
   img: imgUrl || `https://picsum.photos/seed/${name}/200/200`,
   hasContent: true
  }
  setCategories([newCat, ...categories])
 }

 return (
  <div className="space-y-4">
   <SearchInput value={search} onChange={setSearch} />
   <div
    className="grid gap-4"
    style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(155px, 1fr))' }}
   >
    {filtered.map((item) => (
     <CategoryCard key={item.id} item={item} />
    ))}
   </div>
   <div className="bg-white rounded-2xl shadow-sm px-4 py-3">
    <Pagination current={page} onChange={setPage} />
   </div>
   {modal && (
    <AddCategoryModal onClose={() => setModal(false)} onAdd={handleAdd} />
   )}
   <OpenModalTrigger onMount={() => onAddNew(() => setModal(true))} />
  </div>
 )
}

function OpenModalTrigger({ onMount }) {
 const called = useRef(false)
 if (!called.current) {
  called.current = true
  onMount()
 }
 return null
}
