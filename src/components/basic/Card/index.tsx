import { CardProps } from './types'

const Card = ({ children, classNames, title }: CardProps) => (
  <div
    className={`max-w-[948px]
      bg-gray-700 drop-shadow-lg sm:rounded-lg ${classNames}`}
  >
    {title && <h1 className="text-xl font-bold sm:text-2xl">{title}</h1>}
    {children}
  </div>
)

export default Card
