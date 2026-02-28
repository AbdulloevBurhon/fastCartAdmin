import Button from '@/shared/ui/Button'
import PageContainer from '@/shared/ui/PageContainer'
import OrdersContent from '@/widgets/orders/OrdersContent'
import { Plus } from 'lucide-react'

export default function OrdersPage() {
 return (
  <PageContainer
   title="Orders"
   action={
    <Button variant="header" size="header" leftIcon={<Plus size={16} />}>
     Add order
    </Button>
   }
  >
   <OrdersContent />
  </PageContainer>
 )
}
