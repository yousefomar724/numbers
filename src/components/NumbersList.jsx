import { useState } from "react"
import { AiOutlineArrowDown } from "react-icons/ai"
import { numbers } from "../data"
import SingleNumber from "./SingleNumber"

const NumbersList = ({ searchQuery }) => {
  const [numberOfCards, setNumberOfCards] = useState(12)
  const filteredNumbers = numbers.filter((num) =>
    num.name.includes(searchQuery)
  )

  return (
    <div className="mb-6 max-w-6xl mx-auto px-4 lg:px-0">
      <div className="flex flex-col justify-center p-1 flex-wrap lg:flex-row gap-1 border lg:border-none border-main">
        {filteredNumbers.length === 0 ? (
          <div className="text-center text-2xl md:text-3xl text-gray-800 font-semibold py-8">
            لا توجد نتائج
          </div>
        ) : (
          filteredNumbers
            .slice(0, numberOfCards)
            .map((item, i) => <SingleNumber key={i} item={item} />)
        )}
      </div>
      {numberOfCards < numbers.length && (
        <button
          className="flex items-center gap-2 py-2 px-20 bg-main text-white mx-auto my-4 opacity-90 hover:opacity-100 transition text-lg md:text-xl"
          onClick={() => setNumberOfCards((prev) => prev + 6)}
        >
          <AiOutlineArrowDown />
          تحميل المزيد <AiOutlineArrowDown />
        </button>
      )}
    </div>
  )
}

export default NumbersList
