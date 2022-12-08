import { Link } from "react-router-dom"
import placeholder from "../img/img.jpg"

const SingleNumber = ({ item }) => {
  return (
    <div className="flex items-center gap-2 border font-cairo py-1 pr-1 pl-4 lg:w-[377px] bg-white">
      <img
        src={item.img || placeholder}
        alt={item.name}
        className="w-20 h-20 object-cover"
      />
      <div className="flex flex-col w-full">
        <h3 className="text-gray-900 font-bold">{item.name}</h3>
        <p className="text-gray-600">{item.country}</p>
        <Link
          to={`/profile/${item.id}`}
          className="py-2 px-6 self-end rounded-lg bg-main text-white outline-none text-sm focus:outline-none"
        >
          تواصل معي
        </Link>
      </div>
    </div>
  )
}

export default SingleNumber
