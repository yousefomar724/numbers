import { MdSearch } from "react-icons/md"

const Search = ({ searchQuery, setSearchQuery }) => {
  return (
    <div className="flex items-center justify-center flex-col gap-2 font-cairo bg-[#a12586] py-8 lg:py-12 px-4">
      {/* Search bar */}
      <div className="relative shadow-md rounded-lg overflow-hidden min-w-[250px] lg:hidden">
        <input
          type="text"
          className="py-2 pl-9 pr-4 outline-none focus:outline-none bg-white font-cairo w-full"
          onChange={(e) => setSearchQuery(e.target.value)}
          value={searchQuery}
          placeholder="أكتب الإسم أو الدولة هنا..."
        />
        <MdSearch className="absolute top-2.5 left-2 text-2xl text-black/80" />
      </div>
      <p className="text-white text-center lg:text-lg lg:font-semibold">
        أرقام بنات واتساب للتعارف والدردشة من جميع أنحاء العالم العربي مجانا
      </p>
    </div>
  )
}

export default Search
