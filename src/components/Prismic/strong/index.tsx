import { ReactNode } from 'react'

const Strong = ({ children }: { children: ReactNode }) => {
  return (
    <strong className="text-gray-50">{children}</strong>
  )
}

export default Strong
