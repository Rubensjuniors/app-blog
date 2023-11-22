import { Icon } from '../basic'

const Search = () => {
  return (
    <div className="flex items-center relative w-full py-1 px-4 bg-gray-750 rounded-full gap-2">
      <button type="submit">
        <Icon id="magnifyingGlass-phosphor"/>
      </button>
      <input placeholder="Search" type="search" className="w-full h-[40px] outline-none text-gray-100" />
    </div>
  )
}

export default Search
