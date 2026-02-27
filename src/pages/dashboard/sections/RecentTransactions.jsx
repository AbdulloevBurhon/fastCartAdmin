const transactions = [
 {
  name: 'Jagarnath S.',
  date: '24.05.2023',
  amount: '$124.97',
  status: 'Paid'
 },
 { name: 'Anand G.', date: '23.05.2023', amount: '$55.42', status: 'Pending' },
 { name: 'Kartik S.', date: '23.05.2023', amount: '$89.90', status: 'Paid' },
 {
  name: 'Rakesh S.',
  date: '22.05.2023',
  amount: '$144.94',
  status: 'Pending'
 },
 { name: 'Anup S.', date: '22.05.2023', amount: '$70.52', status: 'Paid' },
 { name: 'Jimmy P.', date: '22.05.2023', amount: '$70.52', status: 'Paid' }
]

export default function RecentTransactions() {
 return (
  <div className="bg-white rounded-2xl shadow-sm p-6">
   <h3 className="font-semibold text-gray-900 mb-6">Recent Transactions</h3>

   <div className="overflow-x-auto">
    <table className="w-full">
     <thead className="border-b border-gray-100">
      <tr className="text-xs text-gray-400 uppercase">
       <th className="text-left pb-4">Name</th>
       <th className="text-left pb-4">Date</th>
       <th className="text-left pb-4">Amount</th>
       <th className="text-left pb-4">Status</th>
      </tr>
     </thead>

     <tbody className="text-sm">
      {transactions.map((t, i) => (
       <tr key={i} className="border-b border-gray-50 last:border-none">
        <td className="py-4 text-gray-800">{t.name}</td>
        <td className="py-4 text-gray-500">{t.date}</td>
        <td className="py-4 text-gray-800">{t.amount}</td>
        <td className="py-4">
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
     </tbody>
    </table>
   </div>
  </div>
 )
}
