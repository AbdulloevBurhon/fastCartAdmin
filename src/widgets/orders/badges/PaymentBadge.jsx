function PaymentBadge({ status }) {
 const isPaid = status === 'Paid'

 return (
  <span
   className={`
        inline-flex items-center px-3 py-1 rounded-md text-xs font-semibold whitespace-nowrap border
        ${
         isPaid
          ? 'bg-emerald-50 text-emerald-600 border-emerald-200'
          : 'bg-amber-50 text-amber-600 border-amber-200'
        }
      `}
  >
   {status}
  </span>
 )
}

export default PaymentBadge
