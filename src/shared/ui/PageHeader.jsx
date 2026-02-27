export default function PageHeader({ title, children }) {
 return (
  <div className="flex items-center justify-between mb-6">
   <h1 className="text-2xl font-semibold text-gray-800">{title}</h1>
   {children && <div className="flex items-center gap-4">{children}</div>}
  </div>
 )
}
