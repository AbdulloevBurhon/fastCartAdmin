import Button from '@/shared/ui/Button'
import Input from '@/shared/ui/Input'
import Modal from '@/shared/ui/Modal'
import UploadZone from '@/shared/ui/UploadZone'
import { useState } from 'react'

export default function AddCategoryModal({ isOpen, onClose, onAdd }) {
 const [name, setName] = useState('')
 const [previewUrl, setPreviewUrl] = useState(null)

 const handleCreate = () => {
  if (!name.trim()) return
  onAdd(name.trim(), previewUrl)
  onClose()
 }

 return (
  <Modal isOpen={isOpen} onClose={onClose} title="Add category" size="md">
   <Input
    value={name}
    onChange={setName}
    placeholder="Category name"
    onKeyDown={(e) => e.key === 'Enter' && handleCreate()}
    className="mb-4"
   />

   <UploadZone preview={previewUrl} onChange={setPreviewUrl} />

   <div className="flex justify-end gap-3 mt-6">
    <Button variant="secondary" onClick={onClose}>
     Cancel
    </Button>

    <Button variant="primary" onClick={handleCreate} disabled={!name.trim()}>
     Create
    </Button>
   </div>
  </Modal>
 )
}
