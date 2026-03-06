import { fetchCategories } from '@/features/categories/categoriesThunks'
import Pagination from '@/shared/ui/Pagination'
import SearchInput from '@/shared/ui/SearchInput'
import AddCategoryModal from '@/widgets/other/components/AddCategoryModal'
import CategoryCard from '@/widgets/other/components/CategoryCard'
import { useEffect, useMemo, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

const PAGE_SIZE = 8

export default function CategoriesTab({ onRegisterAction }) {
 const dispatch = useDispatch()
 const {
  categories = [],
  loading,
  error
 } = useSelector((state) => state.categories)

 const [search, setSearch] = useState('')
 const [page, setPage] = useState(1)
 const [modal, setModal] = useState(false)

 // 🔹 Загружаем категории
 useEffect(() => {
  dispatch(fetchCategories())
 }, [dispatch])

 // 🔹 Сброс страницы при поиске
 useEffect(() => {
  setPage(1)
 }, [search])

 // 🔹 Регистрация кнопки добавления
 useEffect(() => {
  onRegisterAction?.(() => setModal(true))
 }, [onRegisterAction])

 // 🔹 Фильтрация
 const filtered = useMemo(() => {
  return categories.filter((c) =>
   c?.name?.toLowerCase().includes(search.toLowerCase())
  )
 }, [categories, search])

 const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE))

 const paginatedCategories = useMemo(() => {
  return filtered.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE)
 }, [filtered, page])

 if (loading) {
  return <div className="p-6 text-gray-500">Loading...</div>
 }

 if (error) {
  return <div className="p-6 text-red-500">Error: {error}</div>
 }

 return (
  <div className="space-y-4">
   <SearchInput value={search} onChange={setSearch} />

   {/* 🔹 Grid карточек */}
   <div className="flex flex-col gap-4">
    {paginatedCategories.map((item) => (
     <CategoryCard key={item.id} item={item} />
    ))}
   </div>

   {/* 🔹 Pagination */}
   <div className="bg-white rounded-2xl shadow-sm px-4 py-3">
    <Pagination
     page={page}
     totalPages={totalPages}
     onChange={setPage}
     showResults
     totalResults={filtered.length}
    />
   </div>

   <AddCategoryModal isOpen={modal} onClose={() => setModal(false)} />
  </div>
 )
}
