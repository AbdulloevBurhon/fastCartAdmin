import { useRef, useState } from 'react'
import {
  Camera,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Clock,
  Pencil,
  Search,
  Trash2,
  Upload,
  X,
} from 'lucide-react'

/* ══════════════════════════════════════════════════════════════
   DATA
══════════════════════════════════════════════════════════════ */

const TABS = ['Categories', 'Brands', 'Banners']

// Реальные фото-заглушки через picsum с разными seed
const makeImg = (seed) => `https://picsum.photos/seed/${seed}/200/200`

const INIT_CATEGORIES = [
  { id: 1,  name: 'Phones',      img: makeImg('phone1'),   hasContent: true },
  { id: 2,  name: 'Laptops',     img: makeImg('laptop2'),  hasContent: true },
  { id: 3,  name: 'Tablets',     img: makeImg('tablet3'),  hasContent: true },
  { id: 4,  name: 'Headphones',  img: makeImg('audio4'),   hasContent: true },
  { id: 5,  name: 'Camera',      img: makeImg('camera5'),  hasContent: true },
  { id: 6,  name: 'Watches',     img: makeImg('watch6'),   hasContent: true },
  { id: 7,  name: 'TVs',         img: makeImg('tv7'),      hasContent: true },
  { id: 8,  name: 'Gaming',      img: makeImg('game8'),    hasContent: true },
  { id: 9,  name: 'Speakers',    img: makeImg('speak9'),   hasContent: true },
  { id: 10, name: 'Camera',      img: makeImg('cam10'),    hasContent: true },
  { id: 11, name: 'Keyboards',   img: makeImg('key11'),    hasContent: true },
  { id: 12, name: 'Monitors',    img: makeImg('mon12'),    hasContent: true },
  { id: 13, name: 'Printers',    img: makeImg('print13'),  hasContent: true },
  { id: 14, name: 'Routers',     img: makeImg('route14'),  hasContent: true },
  { id: 15, name: 'Camera',      img: makeImg('cam15'),    hasContent: true },
  { id: 16, name: 'Accessories', img: makeImg('acc16'),    hasContent: true },
]

const INIT_BRANDS = ['Samsung', 'Xiaomi', 'LG', 'Nokia', 'Panasonic']

const INIT_SLIDERS = [
  { id: 1, name: 'Healthcare_Erbology.png', img: '📱' },
  { id: 2, name: 'Healthcare_Erbology.png', img: '📱' },
  { id: 3, name: 'Healthcare_Erbology.png', img: '📱' },
]

const INIT_BANNERS = [
  { id: 1, name: 'Healthcare_Erbology.png', img: '🎧' },
]

/* ══════════════════════════════════════════════════════════════
   SHARED: TABS HEADER
══════════════════════════════════════════════════════════════ */

function OtherTabs({ active, onChange }) {
  return (
    <div className="flex items-center gap-0.5">
      {TABS.map((tab) => {
        const on = tab === active
        return (
          <button
            key={tab}
            onClick={() => onChange(tab)}
            className="px-5 py-2 rounded-xl text-sm font-semibold transition-all"
            style={{
              background: on ? '#3b82f6' : 'transparent',
              color: on ? '#fff' : '#9ca3af',
              border: on ? '1px solid #3b82f6' : '1px solid transparent',
            }}
          >
            {tab}
          </button>
        )
      })}
    </div>
  )
}

/* ══════════════════════════════════════════════════════════════
   SHARED: SEARCH INPUT
══════════════════════════════════════════════════════════════ */

function SearchInput({ value, onChange }) {
  return (
    <div
      className="flex items-center gap-2 border border-gray-200 rounded-xl px-3 py-2.5 bg-white hover:border-gray-300 transition-colors"
      style={{ width: 240 }}
    >
      <input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Search..."
        className="outline-none text-sm text-gray-700 placeholder-gray-400 w-full bg-transparent"
      />
      <Search size={15} className="text-gray-400 flex-shrink-0" />
    </div>
  )
}

/* ══════════════════════════════════════════════════════════════
   SHARED: PAGINATION
══════════════════════════════════════════════════════════════ */

function PBtn({ label, active, disabled, onClick }) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className="flex-shrink-0 flex items-center justify-center rounded-lg text-sm font-medium transition-all disabled:opacity-30 disabled:cursor-not-allowed"
      style={{
        width: 32, height: 32,
        background: active ? '#3b82f6' : '#fff',
        color:      active ? '#fff'    : '#6b7280',
        border:    `1px solid ${active ? '#3b82f6' : '#e5e7eb'}`,
      }}
    >
      {label}
    </button>
  )
}

function Pagination({ current, onChange }) {
  return (
    <div className="flex items-center justify-between flex-wrap gap-2">
      <div className="flex items-center gap-1 flex-wrap">
        <PBtn label={<ChevronLeft size={14} />} disabled={current === 1} onClick={() => onChange(current - 1)} />
        {[1, 2, 3, 4, 5, 6].map((p) => (
          <PBtn key={p} label={p} active={current === p} onClick={() => onChange(p)} />
        ))}
        <span className="w-8 h-8 flex items-center justify-center text-sm text-gray-400 select-none">…</span>
        <PBtn label={24} active={current === 24} onClick={() => onChange(24)} />
        <PBtn label={<ChevronRight size={14} />} disabled={current === 24} onClick={() => onChange(current + 1)} />
      </div>
      <span className="text-sm text-gray-400 font-medium whitespace-nowrap">274 Results</span>
    </div>
  )
}

/* ══════════════════════════════════════════════════════════════
   SHARED: UPLOAD ZONE
══════════════════════════════════════════════════════════════ */

function UploadZone({ onFile }) {
  const ref = useRef()
  const [drag, setDrag] = useState(false)

  const handle = (file) => { if (file && onFile) onFile(file) }

  return (
    <div
      onClick={() => ref.current?.click()}
      onDragOver={(e) => { e.preventDefault(); setDrag(true) }}
      onDragLeave={() => setDrag(false)}
      onDrop={(e) => { e.preventDefault(); setDrag(false); handle(e.dataTransfer.files[0]) }}
      className="w-full flex flex-col items-center justify-center gap-2 cursor-pointer rounded-xl transition-colors py-8 px-4"
      style={{
        border: `2px dashed ${drag ? '#3b82f6' : '#d1d5db'}`,
        background: drag ? 'rgba(59,130,246,.04)' : '#fff',
      }}
    >
      <input ref={ref} type="file" className="hidden" onChange={(e) => handle(e.target.files[0])} />
      <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center">
        <Upload size={18} className="text-gray-500" />
      </div>
      <p className="text-sm text-gray-700 text-center">
        <span className="font-semibold underline cursor-pointer">Click to upload</span>{' '}
        or drag and drop
      </p>
      <p className="text-xs text-gray-400">(SVG, JPG, PNG, or gif maximum 900×400)</p>
    </div>
  )
}

/* ══════════════════════════════════════════════════════════════
   ADD CATEGORY MODAL
══════════════════════════════════════════════════════════════ */

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
          <div className="relative rounded-xl overflow-hidden mb-4" style={{ height: 160 }}>
            <img src={previewUrl} alt="preview" className="w-full h-full object-cover" />
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
            onDrop={(e) => { e.preventDefault(); handleFile(e.dataTransfer.files[0]) }}
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
              <span className="font-semibold underline">Click to upload</span> or drag and drop
            </p>
            <p className="text-xs text-gray-400">(SVG, JPG, PNG, or gif maximum 900×400)</p>
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

/* ══════════════════════════════════════════════════════════════
   TAB: CATEGORIES
══════════════════════════════════════════════════════════════ */

function CategoryCard({ item, onEdit }) {
  return (
    <div
      className="relative rounded-2xl overflow-hidden group hover:shadow-lg transition-all cursor-pointer"
      style={{ aspectRatio: '1/1', minHeight: 150 }}
    >
      {/* Image */}
      {item.img ? (
        <img
          src={item.img}
          alt={item.name || ''}
          className="w-full h-full object-cover"
          style={{ display: 'block' }}
        />
      ) : (
        <div className="w-full h-full bg-gray-100 flex items-center justify-center">
          <Camera size={32} className="text-gray-400" strokeWidth={1.4} />
        </div>
      )}

      {/* Dark overlay on hover */}
      <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity" />

      {/* Edit button — always visible top-right */}
      <button
        onClick={(e) => { e.stopPropagation(); onEdit && onEdit(item) }}
        className="absolute top-2.5 right-2.5 z-10 w-7 h-7 rounded-lg flex items-center justify-center transition-all"
        style={{ background: 'rgba(255,255,255,.92)' }}
      >
        <Pencil size={13} className="text-blue-500" />
      </button>

      {/* Name label at bottom */}
      {item.name && (
        <div className="absolute bottom-0 left-0 right-0 px-3 py-2"
          style={{ background: 'linear-gradient(to top, rgba(0,0,0,.55), transparent)' }}>
          <span className="text-white text-xs font-semibold">{item.name}</span>
        </div>
      )}
    </div>
  )
}

function CategoriesTab({ onAddNew }) {
  const [categories, setCategories] = useState(INIT_CATEGORIES)
  const [search, setSearch] = useState('')
  const [page, setPage]     = useState(2)
  const [modal, setModal]   = useState(false)

  const filtered = categories.filter(
    (c) => !c.name || c.name.toLowerCase().includes(search.toLowerCase())
  )

  const handleAdd = (name, imgUrl) => {
    const newCat = {
      id: Date.now(),
      name,
      img: imgUrl || `https://picsum.photos/seed/${name}/200/200`,
      hasContent: true,
    }
    setCategories([newCat, ...categories])
  }

  return (
    <div className="space-y-4">
      <SearchInput value={search} onChange={setSearch} />

      <div
        className="grid gap-4"
        style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(155px, 1fr))' }}
      >
        {filtered.map((item) => (
          <CategoryCard key={item.id} item={item} />
        ))}
      </div>

      <div className="bg-white rounded-2xl shadow-sm px-4 py-3">
        <Pagination current={page} onChange={setPage} />
      </div>

      {modal && (
        <AddCategoryModal
          onClose={() => setModal(false)}
          onAdd={handleAdd}
        />
      )}

      {/* Expose setModal to parent via ref-like callback */}
      <OpenModalTrigger onMount={() => onAddNew(() => setModal(true))} />
    </div>
  )
}

// Helper to pass setModal up to OtherPage so "Add new" button can open it
function OpenModalTrigger({ onMount }) {
  const called = useRef(false)
  if (!called.current) { called.current = true; onMount() }
  return null
}

/* ══════════════════════════════════════════════════════════════
   TAB: BRANDS
══════════════════════════════════════════════════════════════ */

function BrandsTab() {
  const [brands, setBrands] = useState(INIT_BRANDS)
  const [newBrand, setNewBrand] = useState('')
  const [editing, setEditing]   = useState(null) // index being edited

  const handleCreate = () => {
    if (!newBrand.trim()) return
    setBrands([...brands, newBrand.trim()])
    setNewBrand('')
  }

  const handleDelete = (i) => setBrands(brands.filter((_, idx) => idx !== i))

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
      {/* Left: brands list */}
      <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
        <table className="w-full">
          <thead>
            <tr className="border-b border-gray-100">
              <th className="py-3 px-5 text-left text-sm font-medium text-gray-400">Brands</th>
              <th className="py-3 px-5 text-right text-sm font-medium text-gray-400">Action</th>
            </tr>
          </thead>
          <tbody>
            {brands.map((b, i) => (
              <tr key={i} className="border-b border-gray-50 last:border-0">
                <td className="py-3.5 px-5 text-sm font-medium text-blue-500">{b}</td>
                <td className="py-3.5 px-5">
                  <div className="flex items-center justify-end gap-3">
                    <button className="text-blue-500 hover:text-blue-700 transition-colors">
                      <Pencil size={15} />
                    </button>
                    <button onClick={() => handleDelete(i)}
                      className="text-red-400 hover:text-red-600 transition-colors">
                      <Trash2 size={15} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Right: add new brand form */}
      <div className="bg-white rounded-2xl shadow-sm p-6 space-y-4">
        <h3 className="text-lg font-bold text-gray-900">Add new brand</h3>
        <input
          value={newBrand}
          onChange={(e) => setNewBrand(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleCreate()}
          placeholder="Brand name"
          className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm outline-none focus:border-blue-400 transition-colors placeholder-gray-400"
        />
        <div className="flex justify-end">
          <button
            onClick={handleCreate}
            className="px-8 py-2.5 bg-blue-500 hover:bg-blue-600 text-white rounded-xl text-sm font-semibold transition-colors">
            Create
          </button>
        </div>
      </div>
    </div>
  )
}

/* ══════════════════════════════════════════════════════════════
   TAB: BANNERS — shared sub-components
══════════════════════════════════════════════════════════════ */

function ImageListTable({ items, onDelete }) {
  return (
    <div className="border border-gray-200 rounded-xl overflow-hidden">
      <table className="w-full">
        <thead>
          <tr className="bg-gray-50 border-b border-gray-200">
            <th className="py-2.5 px-4 text-left text-xs font-medium text-gray-400">Image</th>
            <th className="py-2.5 px-4 text-left text-xs font-medium text-gray-400">File name</th>
            <th className="py-2.5 px-4 text-right text-xs font-medium text-blue-500">Action</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item, i) => (
            <tr key={item.id} className={i < items.length - 1 ? 'border-b border-gray-100' : ''}>
              <td className="py-2.5 px-4">
                <div className="w-10 h-10 rounded-lg bg-gray-800 flex items-center justify-center text-lg flex-shrink-0">
                  {item.img}
                </div>
              </td>
              <td className="py-2.5 px-4 text-sm text-blue-400">{item.name}</td>
              <td className="py-2.5 px-4 text-right">
                <button onClick={() => onDelete(item.id)}
                  className="text-gray-400 hover:text-red-500 transition-colors">
                  <Trash2 size={15} />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

function FloatingInput({ label, value, onChange, icon }) {
  return (
    <div className="relative">
      <label className="absolute -top-2 left-3 z-10 px-1 bg-white text-xs text-gray-400 leading-none pointer-events-none">
        {label}
      </label>
      <div className="flex items-center border border-gray-200 rounded-xl px-4 py-3 gap-2 focus-within:border-blue-400 transition-colors">
        <input
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="flex-1 outline-none text-sm text-gray-700 bg-transparent"
        />
        {icon && <span className="text-gray-400 flex-shrink-0">{icon}</span>}
      </div>
    </div>
  )
}

function SelectInput({ label, value, onChange, options }) {
  return (
    <div className="relative">
      {label && (
        <label className="absolute -top-2 left-3 z-10 px-1 bg-white text-xs text-gray-400 leading-none pointer-events-none">
          {label}
        </label>
      )}
      <div className="flex items-center border border-gray-200 rounded-xl px-4 py-3 gap-2 cursor-pointer hover:border-gray-300 transition-colors">
        <span className="flex-1 text-sm text-gray-500">{value || options[0]}</span>
        <ChevronDown size={16} className="text-gray-400 flex-shrink-0" />
      </div>
    </div>
  )
}

/* ══════════════════════════════════════════════════════════════
   TAB: BANNERS
══════════════════════════════════════════════════════════════ */

function BannersTab() {
  const [sliders, setSliders] = useState(INIT_SLIDERS)
  const [banners, setBanners] = useState(INIT_BANNERS)
  const [subtitle, setSubtitle] = useState('Enhance Your Music Experience')
  const [sliderTitle, setSliderTitle] = useState('Enhance Your Music Experience')
  const [bannerTitle, setBannerTitle] = useState('Enhance Your Music Experience')
  const [countdown, setCountdown] = useState('05d/23h/59m/35s')
  const [category, setCategory] = useState('Categories')

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">

      {/* ── LEFT: Main sliders ─────────────────────────────── */}
      <div className="space-y-4">
        <h2 className="text-base font-bold text-blue-900">Main sliders</h2>

        {/* Upload zone */}
        <div className="bg-white rounded-2xl shadow-sm p-4">
          <UploadZone />
        </div>

        {/* Sliders list */}
        <div className="bg-white rounded-2xl shadow-sm p-4">
          <ImageListTable
            items={sliders}
            onDelete={(id) => setSliders(sliders.filter((s) => s.id !== id))}
          />
        </div>

        {/* Form */}
        <div className="bg-white rounded-2xl shadow-sm p-5 space-y-4">
          <FloatingInput label="Subtitle" value={subtitle} onChange={setSubtitle} />
          <FloatingInput label="Title" value={sliderTitle} onChange={setSliderTitle} />
          <div className="flex justify-end">
            <button className="px-8 py-2.5 bg-blue-500 hover:bg-blue-600 text-white rounded-xl text-sm font-semibold transition-colors">
              Save
            </button>
          </div>
        </div>
      </div>

      {/* ── RIGHT: Banner ──────────────────────────────────── */}
      <div className="space-y-4">
        <h2 className="text-base font-bold text-blue-900">Banner</h2>

        {/* Upload zone */}
        <div className="bg-white rounded-2xl shadow-sm p-4">
          <UploadZone />
        </div>

        {/* Banner image list */}
        <div className="bg-white rounded-2xl shadow-sm p-4">
          <ImageListTable
            items={banners}
            onDelete={(id) => setBanners(banners.filter((b) => b.id !== id))}
          />
        </div>

        {/* Form */}
        <div className="bg-white rounded-2xl shadow-sm p-5 space-y-4">
          <SelectInput value={category} onChange={setCategory} options={['Categories', 'Brands']} />
          <FloatingInput
            value={countdown}
            onChange={setCountdown}
            icon={<Clock size={16} />}
          />
          <FloatingInput label="Title" value={bannerTitle} onChange={setBannerTitle} />
          <div className="flex justify-end">
            <button className="px-8 py-2.5 bg-blue-500 hover:bg-blue-600 text-white rounded-xl text-sm font-semibold transition-colors">
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

/* ══════════════════════════════════════════════════════════════
   PAGE ROOT
══════════════════════════════════════════════════════════════ */

export default function OtherPage() {
  const [activeTab, setActiveTab] = useState('Categories')
  // Ref to hold the openModal function from CategoriesTab
  const openCategoryModal = useRef(null)

  return (
    <section className="space-y-5 p-5 bg-gray-50 min-h-screen">

      {/* Header: tabs + Add new */}
      <div className="flex items-center justify-between gap-4 flex-wrap">
        <OtherTabs active={activeTab} onChange={setActiveTab} />
        {activeTab !== 'Banners' && (
          <button
            onClick={() => {
              if (activeTab === 'Categories' && openCategoryModal.current) {
                openCategoryModal.current()
              }
            }}
            className="flex items-center gap-1.5 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-xl text-sm font-semibold transition-colors shadow-sm whitespace-nowrap"
          >
            <span className="text-base leading-none">+</span>
            Add new
          </button>
        )}
      </div>

      {/* Tab content */}
      {activeTab === 'Categories' && (
        <CategoriesTab onAddNew={(fn) => { openCategoryModal.current = fn }} />
      )}
      {activeTab === 'Brands'  && <BrandsTab />}
      {activeTab === 'Banners' && <BannersTab />}

    </section>
  )
}
