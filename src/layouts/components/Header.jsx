import Button from '@/shared/ui/Button'
import Dropdown from '@/shared/ui/Dropdown'
import SearchInput from '@/shared/ui/SearchInput'
import { Bell, ChevronDown, LogOut, Menu, Settings, User } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

export default function Header({ onMenuClick }) {
 const navigate = useNavigate()

 const handleLogout = () => {
  navigate('/auth/login')
 }

 const menuItems = [
  { label: 'Profile', icon: User },
  { label: 'Settings', icon: Settings },
  { divider: true },
  { label: 'Logout', icon: LogOut, danger: true, action: handleLogout }
 ]

 return (
  <header className="h-20 bg-[#1e293b] text-white flex items-center justify-between px-4 md:px-8">
   <div className="flex items-center gap-6">
    <img src="/log.png" alt="logo" className="h-8 object-contain lg:hidden" />

    <div className="hidden lg:block">
     <SearchInput className="w-80 bg-white/10 text-white placeholder:text-gray-400" />
    </div>
   </div>

   <div className="flex items-center gap-4">
    <div className="relative">
     <Bell size={20} />
     <span className="absolute -top-2 -right-2 bg-blue-600 text-xs px-2 rounded-full">
      5
     </span>
    </div>

    <Dropdown
     align="right"
     width="w-36"
     trigger={
      <Button
       variant="ghost"
       className="flex items-center gap-3 text-white hover:bg-white/10"
      >
       <div className="w-9 h-9 rounded-full bg-green-500 flex items-center justify-center font-semibold">
        R
       </div>

       <div className="hidden lg:block text-left">
        <p className="text-sm font-semibold leading-none">Randhir Kumar</p>
        <p className="text-xs text-gray-400">Administrator</p>
       </div>

       <ChevronDown size={16} className="hidden lg:block" />
      </Button>
     }
    >
     {({ close }) =>
      menuItems.map((item, i) =>
       item.divider ? (
        <div key={i} className="border-t my-1" />
       ) : (
        <Button
         key={i}
         variant="ghost"
         className={`w-full justify-start rounded-none flex items-center gap-2 ${
          item.danger ? 'text-red-500 hover:bg-red-50' : ''
         }`}
         onClick={() => {
          close()
          item.action?.()
         }}
        >
         <item.icon size={16} />
         {item.label}
        </Button>
       )
      )
     }
    </Dropdown>

    <Button variant="icon" onClick={onMenuClick} className="lg:hidden">
     <Menu size={22} />
    </Button>
   </div>
  </header>
 )
}
