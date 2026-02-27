import navigation from '@/config/navigation'
import Header from '@/layouts/components/Header'
import Sidebar from '@/layouts/components/Sidebar'
import SidebarItem from '@/layouts/components/SidebarItem'
import Button from '@/shared/ui/Button'
import Container from '@/shared/ui/Container'
import SearchInput from '@/shared/ui/SearchInput'
import { X } from 'lucide-react'
import { useState } from 'react'
import { Outlet } from 'react-router-dom'

export default function DashboardLayout() {
 const [isSidebarOpen, setIsSidebarOpen] = useState(false)

 return (
  <div className="flex min-h-screen bg-[#f4f6f9]">
   <div className="hidden lg:block">
    <Sidebar />
   </div>

   <div
    className={`fixed inset-0 z-50 lg:hidden transition-opacity duration-300 ${
     isSidebarOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
    }`}
   >
    <div
     className="absolute inset-0 bg-black/40"
     onClick={() => setIsSidebarOpen(false)}
    />

    <div
     className={`absolute top-0 right-0 h-full w-72 bg-[#1e293b] text-white transform transition-transform duration-300 ${
      isSidebarOpen ? 'translate-x-0' : 'translate-x-full'
     }`}
    >
     <div className="p-6 border-b border-white/10 space-y-6">
      <div className="flex justify-end">
       <Button variant="icon" onClick={() => setIsSidebarOpen(false)}>
        <X size={20} />
       </Button>
      </div>

      <div className="flex items-center gap-4">
       <div className="w-12 h-12 rounded-full bg-green-500 flex items-center justify-center text-lg font-semibold">
        R
       </div>
       <div>
        <p className="font-semibold">Randhir kumar</p>
        <p className="text-sm text-gray-400">Administrator</p>
       </div>
      </div>

      <SearchInput
       placeholder="Search..."
       className="bg-white/10 text-white placeholder:text-gray-400 border-white/10"
      />
     </div>

     <div className="px-3 py-4 space-y-2">
      {navigation.map((item) => (
       <SidebarItem
        key={item.name}
        item={item}
        closeSidebar={() => setIsSidebarOpen(false)}
       />
      ))}
     </div>
    </div>
   </div>

   <div className="flex-1 flex flex-col">
    <Header onMenuClick={() => setIsSidebarOpen(true)} />

    <main className="flex-1 py-6 px-4 md:px-8">
     <Container>
      <Outlet />
     </Container>
    </main>
   </div>
  </div>
 )
}
