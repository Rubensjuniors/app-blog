import { Flex, Skeleton } from '@radix-ui/themes'
import { ReactNode } from 'react'

import { Sidemenu } from './Sidemenu'

interface StructorProps {
  children: ReactNode
}

export const Structor = ({ children }: StructorProps) => (
  <Flex justify="center" className="mx-auto my-0 min-h-screen max-w-screen-lg">
    <Sidemenu />
    <main className="z-1 w-content border-x border-gray-600">
      <Skeleton>Header</Skeleton>
      <Flex justify="between" direction="column" className="min-h-[95vh]" p="4">
        {children}
      </Flex>
    </main>
  </Flex>
)
