import { Icon } from '@/components/Basic'

import { formatDate } from '@/utils/date'

import * as S from './styles'
import { InfosExtrasPostProps } from './types'

const InfosExtrasPost = ({
  publicationDate,
  readingTime
}: InfosExtrasPostProps) => {
  const publicationDateFormat = formatDate(publicationDate)

  return (
    <S.CardPostInfosExtra>
      <S.CardPostInfosExtraDate>
        <Icon id="calendarBlank-phosphor" />
        <span>
          {publicationDateFormat} • {readingTime} minutos de leitura
        </span>
      </S.CardPostInfosExtraDate>
    </S.CardPostInfosExtra>
  )
}

export default InfosExtrasPost
