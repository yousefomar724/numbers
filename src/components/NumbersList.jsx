import { useState } from "react"
import { AiOutlineArrowDown } from "react-icons/ai"
import { numbers } from "../data"
import SingleNumber from "./SingleNumber"

const NumbersList = () => {
  const [numberOfCards, setNumberOfCards] = useState(12)
  return (
    <div className="mb-6 max-w-6xl mx-auto px-4 lg:px-0">
      <div className="flex flex-col justify-center p-1 flex-wrap lg:flex-row gap-1 border lg:border-none border-main">
        {numbers.slice(0, numberOfCards).map((item, i) => (
          <SingleNumber key={i} item={item} />
        ))}
      </div>
      {numberOfCards < numbers.length && (
        <button
          className="lg:flex items-center gap-2 py-2 px-20 bg-main text-white mx-auto my-4 opacity-90 hover:opacity-100 transition hidden text-xl"
          onClick={() => setNumberOfCards((prev) => prev + 2)}
        >
          <AiOutlineArrowDown />
          تحميل المزيد <AiOutlineArrowDown />
        </button>
      )}
    </div>
  )
}

export default NumbersList
