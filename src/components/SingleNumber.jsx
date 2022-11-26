import placeholder from "../img/img.jpg"

const SingleNumber = () => {
  return (
    <div className="flex items-center gap-2 border font-cairo py-1 pr-1 pl-4 lg:w-[377px]">
      <img src={placeholder} alt="" className="w-20 h-20 object-cover" />
      <div className="flex flex-col w-full">
        <h3 className="text-gray-900 font-bold">سهام من الدار البيضاء</h3>
        <p className="text-gray-600">المغرب</p>
        <button className="py-2 px-6 self-end rounded-lg bg-main text-white outline-none text-sm focus:outline-none">
          تواصل معي
        </button>
      </div>
    </div>
  )
}

export default SingleNumber
