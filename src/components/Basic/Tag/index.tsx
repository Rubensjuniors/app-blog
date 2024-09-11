import Link from 'next/link'
import React from 'react'

interface TagProps {
  title: string
  onCLick?: () => void
}

const Tag = ({ title }: TagProps) => (
  <Link
    href={`/artigos?topic=${title}`}
    className="rounded-full bg-gray-750 p-1 px-5 text-sm transition-all hover:text-red-300"
  >
    {title}
  </Link>
)

export default Tag
