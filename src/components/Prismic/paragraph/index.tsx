import { ReactNode } from 'react'

const Paragraph = ({ children }: { children: ReactNode }) => {
  return (
    <p className="my-4 text-gray-300 text-lg text-justify tracking-wide">{children}</p>
  )
}

export default Paragraph
