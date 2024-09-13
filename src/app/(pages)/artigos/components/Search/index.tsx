import { Icon } from '@/components/Basic'

const Search = () => (
  <div className="relative flex w-full items-center gap-2 rounded-full bg-gray-750 px-4 py-1">
    <button type="submit">
      <Icon id="magnifyingGlass-phosphor" />
    </button>
    <input
      placeholder="Search"
      type="search"
      className="h-[40px] w-full text-gray-100 outline-none"
    />
  </div>
)

export default Search
