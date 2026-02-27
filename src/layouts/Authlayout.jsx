import { Outlet } from 'react-router-dom'

export default function AuthLayout() {
 return (
  <div className="min-h-screen flex">
   <div
    className="hidden lg:flex lg:w-[45%] flex-col justify-center px-16 relative overflow-hidden"
    style={{
     background: `
            radial-gradient(circle at 15% 20%, rgba(59,130,246,0.15), transparent 40%),
            radial-gradient(circle at 85% 75%, rgba(59,130,246,0.12), transparent 45%),
            linear-gradient(135deg, #1C2536 0%, #243049 60%, #1C2536 100%)
          `
    }}
   >
    <div className="absolute top-0 left-0 w-full h-[1px] bg-white/10" />

    <div className="relative z-10 max-w-md">
     <p className="text-white/60 text-lg mb-6 font-medium">
      Welcome to admin panel
     </p>
     <img src="/logo.png" alt="FastCart" className="h-16 object-contain" />
    </div>
   </div>

   <div className="flex-1 flex items-center justify-center bg-white px-6 py-12 sm:px-12">
    <div className="w-full max-w-[420px]">
     <Outlet />
    </div>
   </div>
  </div>
 )
}
