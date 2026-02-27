import RecentTransactions from './sections/RecentTransactions'
import SalesChart from './sections/SalesChart'
import StatsCards from './sections/StatsCards'
import TopProducts from './sections/TopProducts'
import TopSelling from './sections/TopSelling'

export default function DashboardPage() {
 return (
  <div className="space-y-8">
   <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>

   <StatsCards />

   <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 items-stretch">
    <div className="xl:col-span-2 min-w-0 flex">
     <SalesChart />
    </div>

    <div className="flex">
     <TopSelling />
    </div>
   </div>

   <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
    <RecentTransactions />
    <TopProducts />
   </div>
  </div>
 )
}
