import Button from '@/shared/ui/Button'
import Dropdown from '@/shared/ui/Dropdown'
import SearchInput from '@/shared/ui/SearchInput'
import { Bell, ChevronDown, Menu } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

export default function Header({ onMenuClick }) {
 const navigate = useNavigate()

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
     width="w-48"
     trigger={
      <Button
       variant="ghost"
       className="flex items-center gap-3 text-white hover:bg-white/10"
      >
       <div className="w-9 h-9 rounded-full bg-green-500 flex items-center justify-center font-semibold">
        R
       </div>

       <div className="hidden lg:block text-left">
        <p className="text-sm font-semibold leading-none">Randhir kumar</p>
        <p className="text-xs text-gray-400">Administrator</p>
       </div>

       <ChevronDown size={16} className="hidden lg:block" />
      </Button>
     }
    >
     {({ close }) => (
      <>
       <Button
        variant="ghost"
        className="w-full justify-start rounded-none"
        onClick={close}
       >
        Profile
       </Button>

       <Button
        variant="ghost"
        className="w-full justify-start rounded-none"
        onClick={close}
       >
        Settings
       </Button>

       <div className="border-t my-1" />

       <Button
        variant="ghost"
        className="w-full justify-start text-red-500 hover:bg-red-50 rounded-none"
        onClick={() => navigate('/auth/login')}
       >
        Logout
       </Button>
      </>
     )}
    </Dropdown>

    <Button variant="icon" onClick={onMenuClick} className="lg:hidden">
     <Menu size={22} />
    </Button>
   </div>
  </header>
 )
}
