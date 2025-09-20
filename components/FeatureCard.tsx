import Image from 'next/image'
import { LucideIcon } from 'lucide-react'

interface FeatureCardProps {
  icon: LucideIcon
  title: string
  description: string
  image?: string
  imageAlt?: string
}

export default function FeatureCard({ icon: Icon, title, description, image, imageAlt }: FeatureCardProps) {
  return (
    <div className="card text-center group hover:scale-105 transition-transform duration-300">
      {image ? (
        <div className="mb-6">
          <Image
            src={image}
            alt={imageAlt || title}
            width={400}
            height={250}
            className="rounded-lg w-full h-48 object-cover"
          />
        </div>
      ) : (
        <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-primary-200 transition-colors">
          <Icon className="w-6 h-6 text-primary-600" />
        </div>
      )}
      
      <h3 className="text-xl font-semibold text-gray-900 mb-3">
        {title}
      </h3>
      <p className="text-gray-600 leading-relaxed">
        {description}
      </p>
    </div>
  )
}
