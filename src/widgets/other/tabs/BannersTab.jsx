import Button from '@/shared/ui/Button'

import FloatingInput from '@/shared/ui/FloatingInput'
import Select from '@/shared/ui/Select'
import UploadZone from '@/shared/ui/UploadZone'
import { Clock } from 'lucide-react'
import { useState } from 'react'
import BannerSection from '../components/BannerSection'
import { INIT_BANNERS, INIT_SLIDERS } from '../data/constants'
import ImageListTable from './ImageListTable'

export default function BannersTab() {
 const [sliders, setSliders] = useState(INIT_SLIDERS)
 const [banners, setBanners] = useState(INIT_BANNERS)

 const [subtitle, setSubtitle] = useState('Enhance Your Music Experience')
 const [sliderTitle, setSliderTitle] = useState('Enhance Your Music Experience')

 const [bannerTitle, setBannerTitle] = useState('Enhance Your Music Experience')
 const [countdown, setCountdown] = useState('05d/23h/59m/35s')
 const [category, setCategory] = useState('Categories')

 return (
  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
   <BannerSection
    title="Main sliders"
    upload={<UploadZone />}
    table={
     <ImageListTable
      items={sliders}
      onDelete={(id) => setSliders(sliders.filter((s) => s.id !== id))}
     />
    }
    form={
     <>
      <FloatingInput label="Subtitle" value={subtitle} onChange={setSubtitle} />

      <FloatingInput
       label="Title"
       value={sliderTitle}
       onChange={setSliderTitle}
      />

      <div className="flex justify-end">
       <Button variant="primary">Save</Button>
      </div>
     </>
    }
   />

   <BannerSection
    title="Banner"
    upload={<UploadZone />}
    table={
     <ImageListTable
      items={banners}
      onDelete={(id) => setBanners(banners.filter((b) => b.id !== id))}
     />
    }
    form={
     <>
      <Select
       label="Category"
       value={category}
       onChange={setCategory}
       options={['Categories', 'Brands']}
      />

      <FloatingInput
       label="Countdown"
       value={countdown}
       onChange={setCountdown}
       icon={<Clock size={16} />}
      />

      <FloatingInput
       label="Title"
       value={bannerTitle}
       onChange={setBannerTitle}
      />

      <div className="flex justify-end">
       <Button variant="primary">Save</Button>
      </div>
     </>
    }
   />
  </div>
 )
}
