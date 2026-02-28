export default function InventoryCell({ inventory, type }) {
 if (type === 'outstock') {
  return (
   <span
    className="inline-flex items-center px-3 py-0.5 rounded-md text-xs font-medium"
    style={{
     background: 'rgba(148,163,184,.12)',
     color: '#94a3b8',
     border: '1px solid rgba(148,163,184,.25)'
    }}
   >
    Out of Stock
   </span>
  )
 }
 return <span className="text-sm text-gray-500">{inventory}</span>
}
