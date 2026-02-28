export default function TableContainer({ children }) {
 return (
  <div className="w-full">
   <div className="w-full overflow-x-auto">
    <div className="min-w-full inline-block align-middle">{children}</div>
   </div>
  </div>
 )
}
