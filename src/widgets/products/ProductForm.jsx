import Button from '@/shared/ui/Button'
import Card from '@/shared/ui/Card'
import Input from '@/shared/ui/Input'

export default function ProductForm() {
 return (
  <Card>
   <div className="space-y-5">
    <Input placeholder="Product name" />
    <Input placeholder="Price" />
    <Input placeholder="Category" />

    <Button className="w-auto px-6">Save product</Button>
   </div>
  </Card>
 )
}
