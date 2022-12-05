import { AiOutlineMenu, AiOutlinePlus } from "react-icons/ai"
import { MdPhoneInTalk, MdSearch } from "react-icons/md"
import { Link } from "react-router-dom"

const Header = () => {
  return (
    <div className="bg-main p-4">
      <div className="flex justify-between items-center  max-w-6xl mx-auto">
        <div className="flex items-center gap-2 cursor-pointer">
          <span className="p-1 w-10 h-10 rounded-full border-2 border-[#f6d900] flex items-center justify-center">
            <MdPhoneInTalk className="text-[#f6d900] text-3xl transform translate-y-0.5 -translate-x-0.5" />
          </span>
          <Link to="/" className="text-2xl text-white font-bold">
            بنات أون لاين
          </Link>
        </div>
        {/* Search bar */}
        <div className="relative shadow-md rounded-lg overflow-hidden hidden lg:flex min-w-[250px]">
          <input
            type="text"
            className="py-2 pl-9 pr-4 outline-none focus:outline-none bg-white font-cairo w-full"
            placeholder="أكتب الإسم أو الدولة هنا..."
          />
          <MdSearch className="absolute top-2.5 left-2 text-2xl text-black/80" />
        </div>
        <Link
          to={"/create-ad"}
          className="flex items-center font-cairo gap-2 py-2 px-4 rounded-lg bg-[#51a897] hover:bg-[#408577] transition text-white"
        >
          أضف إعلانك <AiOutlinePlus className="text-lg text-white" />
        </Link>
      </div>
    </div>
  )
}

export default Header
