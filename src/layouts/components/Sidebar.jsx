import navigation from '@/config/navigation'
import SidebarItem from './SidebarItem'

export default function Sidebar({ closeSidebar }) {
 return (
  <aside className="w-64 h-full bg-[#1e293b] text-white flex flex-col">
   <div className="h-20 flex items-center px-6 border-b border-white/10">
    <img src="/log.png" alt="logo" className="h-8 object-contain" />
   </div>

   <nav className="flex-1 px-3 py-4 space-y-2">
    {navigation.map((item) => (
     <SidebarItem key={item.name} item={item} closeSidebar={closeSidebar} />
    ))}
   </nav>
  </aside>
 )
}
