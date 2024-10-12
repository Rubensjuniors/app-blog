'use client'

import NextLink from 'next/link'

import tw from 'tailwind-styled-components'

import { ArrowLeftIcon } from '@/components/Basic/Icon/icons'

import { BackButtonProps } from '.'

export const Link = tw(NextLink)<Pick<BackButtonProps, 'hasImage'>>`
  group
  flex
  cursor-pointer
  items-center
  gap-1
  text-gray-400
  rounded-full
  bg-gray-700
  p-2
  ${({ hasImage }) => `
    ${hasImage && 'absolute left-2 top-2'}
  `}
`

export const IcontContainer = tw.div`flex h-8 items-center justify-center rounded-full group-hover:text-gray-100`

export const Icon = tw(ArrowLeftIcon)`
  transition-transform
  duration-300
  ease-in-out
  group-hover:-translate-x-1
`

export const Text = tw.p`duration-300 ease-in-out group-hover:text-gray-100`
