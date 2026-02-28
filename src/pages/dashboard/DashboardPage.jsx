import PageContainer from '@/shared/ui/PageContainer'
import RecentTransactions from './sections/RecentTransactions'
import SalesChart from './sections/SalesChart'
import StatsCards from './sections/StatsCards'
import TopProducts from './sections/TopProducts'
import TopSelling from './sections/TopSelling'

export default function DashboardPage() {
 return (
  <PageContainer title="Dashboard">
   <div className="space-y-8">
    <StatsCards />

    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
     <div className="lg:col-span-2">
      <SalesChart />
     </div>

     <div className="lg:col-span-1">
      <TopSelling />
     </div>
    </div>

    <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
     <RecentTransactions />
     <TopProducts />
    </div>
   </div>
  </PageContainer>
 )
}
