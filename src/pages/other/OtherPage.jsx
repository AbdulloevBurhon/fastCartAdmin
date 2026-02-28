import Button from '@/shared/ui/Button'
import PageContainer from '@/shared/ui/PageContainer'
import BannersTab from '@/widgets/other/tabs/BannersTab'
import BrandsTab from '@/widgets/other/tabs/BrandsTab'
import CategoriesTab from '@/widgets/other/tabs/CategoriesTab'
import OtherTabs from '@/widgets/other/tabs/Othertabs'
import { useRef, useState } from 'react'

export default function OtherPage() {
 const [activeTab, setActiveTab] = useState('Categories')
 const tabActionRef = useRef(null)

 return (
  <PageContainer
   header={<OtherTabs active={activeTab} onChange={setActiveTab} />}
   action={
    activeTab !== 'Banners' && (
     <Button
      variant="header"
      size="header"
      onClick={() => tabActionRef.current?.()}
      leftIcon={<span className="text-base leading-none">+</span>}
     >
      Add new
     </Button>
    )
   }
  >
   {activeTab === 'Categories' && (
    <CategoriesTab
     onRegisterAction={(fn) => {
      tabActionRef.current = fn
     }}
    />
   )}

   {activeTab === 'Brands' && (
    <BrandsTab
     onRegisterAction={(fn) => {
      tabActionRef.current = fn
     }}
    />
   )}

   {activeTab === 'Banners' && <BannersTab />}
  </PageContainer>
 )
}
