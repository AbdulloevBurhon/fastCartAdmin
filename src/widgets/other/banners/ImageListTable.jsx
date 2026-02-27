function ImageListTable({ items, onDelete }) {
 return (
  <div className="border border-gray-200 rounded-xl overflow-hidden">
   <table className="w-full">
    <thead>
     <tr className="bg-gray-50 border-b border-gray-200">
      <th className="py-2.5 px-4 text-left text-xs font-medium text-gray-400">
       Image
      </th>
      <th className="py-2.5 px-4 text-left text-xs font-medium text-gray-400">
       File name
      </th>
      <th className="py-2.5 px-4 text-right text-xs font-medium text-blue-500">
       Action
      </th>
     </tr>
    </thead>
    <tbody>
     {items.map((item, i) => (
      <tr
       key={item.id}
       className={i < items.length - 1 ? 'border-b border-gray-100' : ''}
      >
       <td className="py-2.5 px-4">
        <div className="w-10 h-10 rounded-lg bg-gray-800 flex items-center justify-center text-lg flex-shrink-0">
         {item.img}
        </div>
       </td>
       <td className="py-2.5 px-4 text-sm text-blue-400">{item.name}</td>
       <td className="py-2.5 px-4 text-right">
        <button
         onClick={() => onDelete(item.id)}
         className="text-gray-400 hover:text-red-500 transition-colors"
        >
         <Trash2 size={15} />
        </button>
       </td>
      </tr>
     ))}
    </tbody>
   </table>
  </div>
 )
}

export default ImageListTable
