import { Icon } from '@/components/Basic'

import { formatDate } from '@/utils/date'

import * as S from './styles'
import { InfosExtrasPostProps } from './types'

const InfosExtrasPost = ({ publicationDate, readingTime }: InfosExtrasPostProps) => {
  const publicationDateFormat = formatDate(publicationDate)

  return (
    <S.CardPostInfosExtra>
      <S.CardPostInfosExtraDate>
        <Icon id="calendarBlank-phosphor" />
        <span>{publicationDateFormat} • {readingTime} minutos de leitura</span>
      </S.CardPostInfosExtraDate>

      {/* <S.CardPostInfosExtraTags tags={tags}>
        {tags.map((tag, index) => {
          const limitTags = index < 3

          return (
            limitTags && (
              <Tag size="sm" key={index}>
                {tag}
              </Tag>
            )
          )
        })}
      </S.CardPostInfosExtraTags> */}
    </S.CardPostInfosExtra>
  )
}

export default InfosExtrasPost
