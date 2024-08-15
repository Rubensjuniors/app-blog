import { ReactNode } from 'react'

// import Footer from './Footer'
import Header from './header'
import Sidemenu from './menu'
import { ContainerStructorStyle, ContainerStyle, StructorStyle } from './style'

interface StructorProps {
  children: ReactNode
}

const Structor = ({ children }: StructorProps) => (
  <>
    <ContainerStyle data-testid="structor">
      <Sidemenu />
      <StructorStyle>
        <Header />
        <ContainerStructorStyle>
          <div>{children}</div>
          {/* <Footer /> */}
        </ContainerStructorStyle>
      </StructorStyle>
    </ContainerStyle>
  </>
)

export default Structor
