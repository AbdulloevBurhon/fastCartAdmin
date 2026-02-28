export default function ProductThumb({ emoji, bg }) {
 return (
  <div
   className="flex-shrink-0 rounded-lg flex items-center justify-center text-xl"
   style={{
    width: 52,
    height: 52,
    background: bg,
    border: '1px solid rgba(0,0,0,.07)'
   }}
  >
   {emoji}
  </div>
 )
}
