import { Upload } from 'lucide-react'
import { useRef, useState } from 'react'

export default function UploadZone({ onFile }) {
 const ref = useRef()
 const [drag, setDrag] = useState(false)

 const handle = (file) => {
  if (file && onFile) onFile(file)
 }

 return (
  <div
   onClick={() => ref.current?.click()}
   onDragOver={(e) => {
    e.preventDefault()
    setDrag(true)
   }}
   onDragLeave={() => setDrag(false)}
   onDrop={(e) => {
    e.preventDefault()
    setDrag(false)
    handle(e.dataTransfer.files[0])
   }}
   className="w-full flex flex-col items-center justify-center gap-2 cursor-pointer rounded-xl transition-colors py-8 px-4"
   style={{
    border: `2px dashed ${drag ? '#3b82f6' : '#d1d5db'}`,
    background: drag ? 'rgba(59,130,246,.04)' : '#fff'
   }}
  >
   <input
    ref={ref}
    type="file"
    className="hidden"
    onChange={(e) => handle(e.target.files[0])}
   />
   <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center">
    <Upload size={18} className="text-gray-500" />
   </div>
   <p className="text-sm text-gray-700 text-center">
    <span className="font-semibold underline cursor-pointer">
     Click to upload
    </span>{' '}
    or drag and drop
   </p>
   <p className="text-xs text-gray-400">
    (SVG, JPG, PNG, or gif maximum 900×400)
   </p>
  </div>
 )
}
