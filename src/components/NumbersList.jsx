import { AiOutlineArrowDown } from "react-icons/ai"
import SingleNumber from "./SingleNumber"

const NumbersList = () => {
  return (
    <div className="mb-6 max-w-6xl mx-auto px-4 lg:px-0">
      <div className="flex flex-col justify-center p-1 flex-wrap lg:flex-row gap-1 border lg:border-none border-main">
        {[...Array(12)].map((item, i) => (
          <SingleNumber key={i} />
        ))}
      </div>
      <button className="lg:flex items-center gap-2 py-2 px-20 bg-main text-white mx-auto my-4 opacity-90 hover:opacity-100 transition hidden text-xl">
        <AiOutlineArrowDown />
        تحميل المزيد <AiOutlineArrowDown />
      </button>
    </div>
  )
}

export default NumbersList
