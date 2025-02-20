import Image from "next/image"
import Link from "next/link"

interface ArticleCardProps {
  id: string
  title: string
  description: string
  imageUrl: string
}

export default function ArticleCard({ id, title, description, imageUrl }: ArticleCardProps) {
  return (
    <Link href={`/article/${id}`} className="block">
      <div className="relative h-64 w-full rounded-lg overflow-hidden shadow-lg transition-transform duration-300 ease-in-out hover:scale-105">
        <Image src={imageUrl || "/placeholder.svg"} alt={title} fill className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-secondary to-transparent p-6 flex flex-col justify-end">
          <h2 className="text-xl font-bold text-white mb-2">{title}</h2>
          <p className="text-sm text-gray-200">{description}</p>
        </div>
      </div>
    </Link>
  )
}

