import { ReactNode } from 'react'

import Footer from './Footer'
import Header from './Header'
import Sidemenu from './menu'
import * as S from './style'

interface StructorProps {
  children: ReactNode
}

const Structor = ({ children }: StructorProps) => (
  <>
    <S.ContainerStyle data-testid="structor">
      <Sidemenu />
      <S.StructorStyle>
        <Header />
        <S.ContainerStructorStyle>
          <div>{children}</div>
          <Footer />
        </S.ContainerStructorStyle>
      </S.StructorStyle>
    </S.ContainerStyle>
  </>
)

export default Structor
