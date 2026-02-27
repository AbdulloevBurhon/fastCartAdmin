export default function CategoryCard({ item }) {
 return (
  <div className="rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition cursor-pointer">
   <img
    src={item.img}
    alt={item.name}
    className="w-full aspect-square object-cover"
   />
   <div className="p-3 bg-white text-sm font-semibold text-gray-700">
    {item.name}
   </div>
  </div>
 )
}
