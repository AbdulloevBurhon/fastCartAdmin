export default function PageContainer({ title, header, action, children }) {
 return (
  <section className="space-y-6">
   {(title || header || action) && (
    <div className="flex items-center justify-between gap-4 flex-wrap">
     {header
      ? header
      : title && (
         <h1 className="text-2xl font-semibold text-gray-900">{title}</h1>
        )}

     {action && <div>{action}</div>}
    </div>
   )}

   {children}
  </section>
 )
}
