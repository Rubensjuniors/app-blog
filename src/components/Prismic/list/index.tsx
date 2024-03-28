import { ReactNode } from 'react'

const List = ({ children }: { children: ReactNode}) => {
  return (
    <ol>
      {children}
    </ol>
  )
}

export default List
