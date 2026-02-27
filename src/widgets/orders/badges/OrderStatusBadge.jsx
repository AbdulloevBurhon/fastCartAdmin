function OrderStatusBadge({ status }) {
 const styles = {
  Ready: 'bg-orange-50 text-orange-600 border-orange-200',
  Shipped: 'bg-slate-100 text-slate-500 border-slate-200',
  Received: 'bg-blue-50 text-blue-600 border-blue-200'
 }

 return (
  <span
   className={`
        inline-flex items-center px-3 py-1 rounded-md text-xs font-semibold whitespace-nowrap border
        ${styles[status] || styles.Ready}
      `}
  >
   {status}
  </span>
 )
}

export default OrderStatusBadge
