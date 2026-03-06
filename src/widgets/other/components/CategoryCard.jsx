import Button from '@/shared/ui/Button'
import { Pencil, Trash2 } from 'lucide-react'

export default function CategoryCard({ item, onEdit, onDelete }) {
 return (
  <div className="group relative rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 p-5 flex flex-col justify-between min-h-[190px]">
   {/* Верхняя часть */}
   <div>
    <h3 className="text-lg font-semibold text-gray-800 group-hover:text-blue-600 transition-colors">
     {item?.name}
    </h3>

    <p className="mt-2 text-sm text-gray-500 leading-relaxed line-clamp-3">
     {item?.description}
    </p>
   </div>

   {/* Нижняя часть */}
   <div className="flex items-center justify-between mt-6 pt-4 border-t border-gray-100">
    <span className="text-xs text-gray-400">
     {new Date(item?.createdAt).toLocaleDateString()}
    </span>

    <div className="flex items-center gap-2">
     {/* Edit */}
     <Button
      size="icon"
      className="bg-blue-50 text-blue-600 hover:bg-blue-100 transition-colors rounded-xl"
      onClick={() => onEdit?.(item)}
     >
      <Pencil size={16} />
     </Button>

     {/* Delete */}
     <Button
      size="icon"
      className="bg-red-50 text-red-600 hover:bg-red-100 transition-colors rounded-xl"
      onClick={() => onDelete?.(item.id)}
     >
      <Trash2 size={16} />
     </Button>
    </div>
   </div>
  </div>
 )
}
