import Button from '@/shared/ui/Button'
import PageContainer from '@/shared/ui/PageContainer'
import ProductsContent from '@/widgets/products/components/ProductsContent'

export default function ProductsPage() {
 return (
  <PageContainer
   title="Products"
   action={
    <Button
     variant="header"
     size="header"
     leftIcon={<span className="text-base leading-none">+</span>}
    >
     Add product
    </Button>
   }
  >
   <ProductsContent />
  </PageContainer>
 )
}
