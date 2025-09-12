import { ReactNode } from 'react'

interface StructorProps {
  children: ReactNode
}

export function Structuor({ children }: StructorProps) {
  return (
    <div className="mx-auto my-0 flex min-h-screen max-w-screen-xl justify-center" data-testid="structor">
      <p>SideMenu</p>
      <main className="z-1 w-[min(850px,100%)] border-x border border-t-0 border-b-0">
        <p>header</p>
        <div className="flex min-h-[95vh] flex-col justify-between">
          <div>{children}</div>
          <p>footer</p>
        </div>
      </main>
    </div>
  )
}
