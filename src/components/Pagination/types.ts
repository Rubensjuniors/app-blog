export interface PaginationProps {
  totalCountOfRegisters?: number
  registersPerPage?: number
  currentPage?: number
  onPageChange: (page: number) => void
}

export interface PaginationItemProps {
  number: number
  isCurrent?: boolean
  onPageChange: (page: number) => void
}
