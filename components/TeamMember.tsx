import Image from 'next/image'
import { Linkedin, Twitter, Mail } from 'lucide-react'

interface TeamMemberProps {
  name: string
  role: string
  bio: string
  image: string
  imageAlt?: string
  linkedin?: string
  twitter?: string
  email?: string
}

export default function TeamMember({ 
  name, 
  role, 
  bio, 
  image, 
  imageAlt, 
  linkedin, 
  twitter, 
  email 
}: TeamMemberProps) {
  return (
    <div className="card text-center group">
      <div className="mb-6">
        <Image
          src={image}
          alt={imageAlt || `${name} - ${role}`}
          width={300}
          height={300}
          className="rounded-full w-32 h-32 object-cover mx-auto shadow-lg group-hover:shadow-xl transition-shadow duration-300"
        />
      </div>
      
      <h3 className="text-xl font-semibold text-gray-900 mb-1">
        {name}
      </h3>
      <p className="text-primary-600 font-medium mb-3">
        {role}
      </p>
      <p className="text-gray-600 text-sm leading-relaxed mb-4">
        {bio}
      </p>
      
      <div className="flex justify-center space-x-3">
        {linkedin && (
          <a 
            href={linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-primary-100 transition-colors"
          >
            <Linkedin className="w-4 h-4 text-gray-600 hover:text-primary-600" />
          </a>
        )}
        {twitter && (
          <a 
            href={twitter}
            target="_blank"
            rel="noopener noreferrer"
            className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-primary-100 transition-colors"
          >
            <Twitter className="w-4 h-4 text-gray-600 hover:text-primary-600" />
          </a>
        )}
        {email && (
          <a 
            href={`mailto:${email}`}
            className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-primary-100 transition-colors"
          >
            <Mail className="w-4 h-4 text-gray-600 hover:text-primary-600" />
          </a>
        )}
      </div>
    </div>
  )
}
