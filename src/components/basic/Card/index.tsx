import { ReactNode } from 'react'

type CardProps = {
  children: ReactNode
  classNames?: string
  title?: string
}

const Card = ({ children, classNames, title }: CardProps) => (
  <div className={`max-w-[748px] bg-card sm:rounded-lg ${classNames}`}>
    {title && <h1 className="text-xl font-bold sm:text-2xl">{title}</h1>}
    {children}
  </div>
)

export default Card
