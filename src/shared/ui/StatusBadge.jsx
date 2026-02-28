export default function StatusBadge({ type = 'order', status }) {
 const paymentStyles = {
  Paid: 'bg-emerald-50 text-emerald-600 border-emerald-200',
  Pending: 'bg-amber-50 text-amber-600 border-amber-200'
 }

 const orderStyles = {
  Ready: 'bg-orange-50 text-orange-600 border-orange-200',
  Shipped: 'bg-slate-100 text-slate-500 border-slate-200',
  Received: 'bg-blue-50 text-blue-600 border-blue-200'
 }

 const styles = type === 'payment' ? paymentStyles : orderStyles

 return (
  <span
   className={`
        inline-flex items-center px-3 py-1 rounded-md text-xs font-semibold whitespace-nowrap border
        ${styles[status]}
      `}
  >
   {status}
  </span>
 )
}
