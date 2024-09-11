import React from 'react'

import { SOCIAIS } from '@/utils/constantes'

import { Icon } from '../Basic'
import * as S from './styles'

const LinksSociais = ({ classNames }: { classNames?: string }) => (
  <nav className={classNames}>
    <S.LinksSociaisList>
      {SOCIAIS.map((social) => (
        <li key={social.name}>
          <a href={social.url}>
            <Icon id={social.id} iconSize={36} />
          </a>
        </li>
      ))}
    </S.LinksSociaisList>
  </nav>
)

export default LinksSociais
