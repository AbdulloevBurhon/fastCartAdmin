import Card from '@/shared/ui/Card'

export default function BannerSection({ title, upload, table, form }) {
 return (
  <div className="space-y-4">
   <h2 className="text-base font-bold text-blue-900">{title}</h2>

   <Card className="p-4 rounded-2xl">{upload}</Card>

   <Card className="p-4 rounded-2xl">{table}</Card>

   <Card className="p-5 rounded-2xl space-y-4">{form}</Card>
  </div>
 )
}
