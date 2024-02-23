import React from 'react'

interface TagProps {
  title: string
  onCLick?: () => void
}

const Tag = ({ title }: TagProps) => {
  return (
    <button className="bg-gray-750 p-1 px-5 rounded-full text-sm hover:text-red-300 transition-all">{title}</button>
  )
}

export default Tag
