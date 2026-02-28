import Button from '@/shared/ui/Button'
import SearchInput from '@/shared/ui/SearchInput'
import Select from '@/shared/ui/Select'
import { Pencil, Trash2 } from 'lucide-react'

export default function TableToolbar({
 search,
 onSearch,
 filter,
 onFilter,
 filterOptions = []
}) {
 return (
  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 px-4 md:px-6 py-4 border-b border-gray-100">
   <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto">
    <SearchInput value={search} onChange={onSearch} width="w-full sm:w-60" />

    <Select
     label="Filter"
     value={filter}
     onChange={onFilter}
     options={filterOptions}
     width="w-full sm:w-44"
    />
   </div>

   <div className="flex items-center gap-2">
    <Button variant="icon">
     <Pencil size={15} />
    </Button>

    <Button
     variant="icon"
     className="hover:bg-red-50 hover:border-red-300 hover:text-red-500"
    >
     <Trash2 size={15} />
    </Button>
   </div>
  </div>
 )
}
