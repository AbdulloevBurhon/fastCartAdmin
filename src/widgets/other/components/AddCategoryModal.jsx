import Button from '@/shared/ui/Button'
import Input from '@/shared/ui/Input'
import Modal from '@/shared/ui/Modal'
import { useState } from 'react'

export default function AddCategoryModal({ isOpen, onClose, onAdd }) {
 const [name, setName] = useState('')
 const [description, setDescription] = useState('')

 const handleCreate = () => {
  if (!name.trim()) return

  onAdd({
   name: name.trim(),
   description: description.trim()
  })

  setName('')
  setDescription('')
  onClose()
 }

 return (
  <Modal isOpen={isOpen} onClose={onClose} title="Add Category" size="md">
   {/* Name */}
   <Input
    value={name}
    onChange={setName}
    placeholder="Category name"
    onKeyDown={(e) => e.key === 'Enter' && handleCreate()}
    className="mb-4"
   />

   {/* Description */}
   <Input
    value={description}
    onChange={setDescription}
    placeholder="Category description"
    className="mb-4"
   />

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
