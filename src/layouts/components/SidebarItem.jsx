import { NavLink } from 'react-router-dom'

export default function SidebarItem({ item, closeSidebar }) {
 const Icon = item.icon

 return (
  <NavLink
   to={item.path}
   onClick={closeSidebar}
   className={({ isActive }) =>
    `flex items-center gap-3 px-4 py-3 rounded-lg transition ${
     isActive
      ? 'bg-white/10 text-white'
      : 'text-white/70 hover:bg-white/5 hover:text-white'
    }`
   }
  >
   <Icon size={18} />
   {item.name}
  </NavLink>
 )
}
