import { data } from '@/pages/dashboard/data/products'
import {
 CartesianGrid,
 Line,
 LineChart,
 ResponsiveContainer,
 Tooltip,
 XAxis,
 YAxis
} from 'recharts'

export default function SalesChart() {
 return (
  <div className="bg-white rounded-2xl shadow-sm p-6 flex flex-col w-full">
   <h3 className="font-semibold text-gray-900 mb-6">Sales Revenue</h3>

   {/* Только height, без aspect */}
   <div className="w-full h-[220px] sm:h-[260px] lg:h-[320px]">
    <ResponsiveContainer width="100%" height="100%">
     <LineChart data={data}>
      <CartesianGrid strokeDasharray="3 3" vertical={false} />
      <XAxis dataKey="month" tick={{ fontSize: 10 }} />
      <YAxis tick={{ fontSize: 10 }} width={30} />
      <Tooltip />
      <Line
       type="monotone"
       dataKey="value"
       stroke="#3b82f6"
       strokeWidth={2}
       dot={{ r: 3 }}
       activeDot={{ r: 5 }}
      />
     </LineChart>
    </ResponsiveContainer>
   </div>
  </div>
 )
}
