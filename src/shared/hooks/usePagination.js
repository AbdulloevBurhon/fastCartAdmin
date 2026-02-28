//usePagination
import { useEffect, useState } from 'react'

export function usePagination(data, search, searchFn, pageSize = 10) {
 const [page, setPage] = useState(1)

 const filtered = data.filter(searchFn)

 const totalPages = Math.ceil(filtered.length / pageSize)

 useEffect(() => {
  if (totalPages > 0 && page > totalPages) {
   setPage(totalPages)
  }
 }, [totalPages])

 useEffect(() => {
  setPage(1)
 }, [search])

 const paginatedData = filtered.slice((page - 1) * pageSize, page * pageSize)

 return { paginatedData, totalPages, page, setPage, filtered }
}
