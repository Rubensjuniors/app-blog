import { ReactNode } from 'react'

import Header from './Header'
import { StructorStyle } from './style'

const Structor = ({ children }: { children: ReactNode }) => (
  <>
    <Header />
    <StructorStyle>{children}</StructorStyle>
  </>
)

export default Structor
