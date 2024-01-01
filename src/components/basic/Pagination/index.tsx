import { PaginationItem } from './button'
import { PaginationProps } from './types'

const siblingsCount = 1

function generatePagesArray(from: number, to: number) {
  return [... new Array(to - from)]
    .map((_, idx) => from + idx + 1)
    .filter(page => page > 0)
}

export default function Pagination({
  totalCountOfRegisters = 0,
  registersPerPage = 3,
  currentPage = 1,
  onPageChange
}: PaginationProps) {
  const lastPage = Math.ceil( totalCountOfRegisters / registersPerPage )

  const previousPages = currentPage > 1
    ? generatePagesArray(
      currentPage - 1 - siblingsCount, currentPage - 1
    )
    : []

  const nextPages = currentPage < lastPage
    ? generatePagesArray(
      currentPage, Math.min(currentPage + siblingsCount, lastPage)
    )
    : []

  const initialRegisterNumber = (currentPage - 1) * registersPerPage
  const finalRegisterNumber = currentPage === lastPage
    ? totalCountOfRegisters
    : currentPage * registersPerPage

  return (
    <div className="flex flex-wrap mt-5 justify-between items-center">
      <div>
        <strong>
          {initialRegisterNumber}
        </strong> - <strong>
          {finalRegisterNumber}
        </strong> de <strong>
          {totalCountOfRegisters}
        </strong>
      </div>
      <div className="flex items-center gap-2" >
        {currentPage > (1 + siblingsCount) && (
          <>
            <PaginationItem
              number={1} onPageChange={onPageChange}
            />
            {currentPage > (2 + siblingsCount) && (
              <p className="text-gray-300 w-8 text-center" >...</p>
            )}
          </>
        )}

        {previousPages.length > 0 && previousPages.map(page => (
          <PaginationItem
            key={page} number={page} onPageChange={onPageChange}
          />
        ))}

        <PaginationItem
          number={currentPage} onPageChange={onPageChange} isCurrent
        />

        {nextPages.length > 0 && nextPages.map(page => (
          <PaginationItem
            key={page} number={page} onPageChange={onPageChange}
          />
        ))}

        {currentPage + siblingsCount < lastPage && (
          <>
            {currentPage + 1 + siblingsCount < lastPage && (
              <p className="text-gray-300 w-8 text-center" >...</p>
            )}
            <PaginationItem
              number={lastPage} onPageChange={onPageChange}
            />
          </>
        )}
      </div>
    </div>
  )
}