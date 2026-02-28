import Checkbox from '@/shared/ui/Checkbox'

export default function TableWrapper({
 items = [],
 onToggleAll,
 minWidth = 600,
 headers = [],
 selectable = false,
 rowHover = false,
 children
}) {
 const allSelected =
  selectable && items.length > 0 && items.every((item) => item.selected)

 const someSelected =
  selectable && items.some((item) => item.selected) && !allSelected

 return (
  <div className="w-full overflow-x-auto">
   <table className={`w-full min-w-[${minWidth}px]`}>
    <thead>
     <tr className="border-b border-gray-100">
      {selectable && (
       <th className="py-3 pl-6 pr-2 w-9">
        <Checkbox
         checked={allSelected}
         indeterminate={someSelected}
         onChange={onToggleAll}
        />
       </th>
      )}

      {headers.map((h) => (
       <th
        key={h}
        className="py-3 px-3 text-left text-xs font-medium text-gray-400 whitespace-nowrap"
       >
        {h}
       </th>
      ))}
     </tr>
    </thead>

    <tbody
     className={`
            divide-y divide-gray-50
            ${rowHover ? '[&>tr:hover]:bg-gray-50' : ''}
          `}
    >
     {children}
    </tbody>
   </table>
  </div>
 )
}
