import { transactions } from '@/pages/dashboard/data/products'
import Card from '@/shared/ui/Card'
import TableWrapper from '@/shared/ui/TableWrapper'

export default function RecentTransactions() {
 return (
  <Card className="rounded-2xl">
   <h3 className="font-semibold text-gray-900 mb-6">Recent Transactions</h3>

   <TableWrapper
    headers={['Name', 'Date', 'Amount', 'Status']}
    selectable={false}
    minWidth={500}
   >
    {transactions.map((t, i) => (
     <tr key={i} className="border-b border-gray-50 last:border-none">
      <td className="py-4 px-3 text-gray-800">{t.name}</td>

      <td className="py-4 px-3 text-gray-500">{t.date}</td>

      <td className="py-4 px-3 text-gray-800">{t.amount}</td>

      <td className="py-4 px-3">
       <span
        className={`px-3 py-1 rounded-md text-xs font-medium ${
         t.status === 'Paid'
          ? 'bg-emerald-100 text-emerald-600'
          : 'bg-purple-100 text-purple-600'
        }`}
       >
        {t.status}
       </span>
      </td>
     </tr>
    ))}
   </TableWrapper>
  </Card>
 )
}
