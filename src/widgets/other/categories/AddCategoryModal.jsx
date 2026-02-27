import { useRef, useState } from 'react'

function AddCategoryModal({ onClose, onAdd }) {
 const [name, setName] = useState('')
 const [previewUrl, setPreviewUrl] = useState(null)
 const fileRef = useRef()

 const handleFile = (file) => {
  if (!file) return
  const url = URL.createObjectURL(file)
  setPreviewUrl(url)
 }

 const handleCreate = () => {
  if (!name.trim()) return
  onAdd(name.trim(), previewUrl)
  onClose()
 }

 return (
  <div
   className="fixed inset-0 z-50 flex items-center justify-center p-4"
   style={{ background: 'rgba(0,0,0,.5)' }}
   onClick={(e) => e.target === e.currentTarget && onClose()}
  >
   <div className="bg-white rounded-2xl shadow-2xl w-full max-w-[520px] p-6 relative">
    {/* Close */}
    <button
     onClick={onClose}
     className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
    >
     <X size={18} />
    </button>

    <h2 className="text-xl font-bold text-gray-900 mb-5">Add category</h2>

    {/* Name input */}
    <input
     value={name}
     onChange={(e) => setName(e.target.value)}
     placeholder="Category name"
     className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm outline-none focus:border-blue-400 transition-colors mb-4 placeholder-gray-400"
     onKeyDown={(e) => e.key === 'Enter' && handleCreate()}
    />

    {/* Upload zone */}
    {previewUrl ? (
     <div
      className="relative rounded-xl overflow-hidden mb-4"
      style={{ height: 160 }}
     >
      <img
       src={previewUrl}
       alt="preview"
       className="w-full h-full object-cover"
      />
      <button
       onClick={() => setPreviewUrl(null)}
       className="absolute top-2 right-2 w-7 h-7 rounded-full bg-white/90 flex items-center justify-center text-gray-500 hover:text-red-500 transition-colors shadow"
      >
       <X size={14} />
      </button>
     </div>
    ) : (
     <div
      onClick={() => fileRef.current?.click()}
      onDragOver={(e) => e.preventDefault()}
      onDrop={(e) => {
       e.preventDefault()
       handleFile(e.dataTransfer.files[0])
      }}
      className="w-full flex flex-col items-center justify-center gap-2 cursor-pointer rounded-xl py-8 px-4 mb-4 transition-colors"
      style={{ border: '2px dashed #d1d5db', background: '#fafafa' }}
     >
      <input
       ref={fileRef}
       type="file"
       accept="image/*"
       className="hidden"
       onChange={(e) => handleFile(e.target.files[0])}
      />
      <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center">
       <Upload size={18} className="text-gray-500" />
      </div>
      <p className="text-sm text-gray-700 text-center">
       <span className="font-semibold underline">Click to upload</span> or drag
       and drop
      </p>
      <p className="text-xs text-gray-400">
       (SVG, JPG, PNG, or gif maximum 900×400)
      </p>
     </div>
    )}

    {/* Buttons */}
    <div className="flex items-center justify-end gap-3 pt-2">
     <button
      onClick={onClose}
      className="px-6 py-2.5 rounded-xl border border-gray-200 text-sm font-semibold text-gray-600 hover:bg-gray-50 transition-colors"
     >
      Cancel
     </button>
     <button
      onClick={handleCreate}
      disabled={!name.trim()}
      className="px-6 py-2.5 rounded-xl bg-blue-500 hover:bg-blue-600 disabled:opacity-40 disabled:cursor-not-allowed text-white text-sm font-semibold transition-colors"
     >
      Create
     </button>
    </div>
   </div>
  </div>
 )
}
export default AddCategoryModal
