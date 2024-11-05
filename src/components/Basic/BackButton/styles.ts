'use client'

import tw from 'tailwind-styled-components'

import { ArrowLeftIcon } from '@/components/Basic/Icon/icons'

export const IcontContainer = tw.div`flex h-8 items-center justify-center rounded-full group-hover:text-gray-100`

export const Icon = tw(ArrowLeftIcon)`
  transition-transform
  duration-300
  ease-in-out
  group-hover:-translate-x-1
`

export const Text = tw.p`duration-300 ease-in-out group-hover:text-gray-100`
