import { PaginationItemProps } from '../types'

export function PaginationItem({
  number,
  isCurrent = false,
  onPageChange,
}: PaginationItemProps) {
  if (isCurrent) {
    return (
      <button
        className=" bg-red-300 text-xs w-7 h-7 rounded-md"
        disabled
      >
        {number}
      </button>
    )
  } else {
    return (
      <button
        className=" bg-gray-700 text-xs w-7 h-7 hover:bg-gray-500 rounded-md"
        onClick={() => onPageChange(number)}
      >
        {number}
      </button>
    )
  }
}
