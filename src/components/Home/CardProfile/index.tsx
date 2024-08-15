import Image from 'next/image'

import * as S from './styles'

const CardProfile = () => (
  <S.WrapperCard>
    <S.Picture>
      <Image
        className="w-full rounded-full shadow-sm"
        src="https://avatars.githubusercontent.com/u/104171589?v=4"
        width={44}
        height={44}
        alt=""
        priority
      />
    </S.Picture>

    <S.Title>Rubens Junio</S.Title>
    <S.Bio>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, dolore?
    </S.Bio>
  </S.WrapperCard>
)

export default CardProfile
