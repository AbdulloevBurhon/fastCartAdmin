export default function StatusBadge({ status }) {
 const styles = {
  Paid: 'bg-green-100 text-green-600',
  Pending: 'bg-gray-200 text-gray-600',
  Ready: 'bg-orange-100 text-orange-600',
  Shipped: 'bg-blue-100 text-blue-600',
  Received: 'bg-purple-100 text-purple-600',
  'In stock': 'bg-green-100 text-green-600',
  'Out of stock': 'bg-red-100 text-red-600'
 }

 return (
  <span
   className={`px-3 py-1 text-xs rounded-full ${
    styles[status] || 'bg-gray-200 text-gray-600'
   }`}
  >
   {status}
  </span>
 )
}
