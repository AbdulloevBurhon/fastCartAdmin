export default function SearchInput({ value, onChange }) {
 return (
  <input
   value={value}
   onChange={(e) => onChange(e.target.value)}
   placeholder="Search..."
   className="border border-gray-200 rounded-xl px-4 py-2 text-sm w-60 focus:outline-none focus:border-blue-500"
  />
 )
}
