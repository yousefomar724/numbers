import { useParams } from "react-router-dom"
import { Ad } from "../components"
import { numbers } from "../data"
import img from "../img/img.jpg"
import bg from "../img/bg.jpg"
import { useForm } from "react-hook-form"
import { AiOutlineArrowDown } from "react-icons/ai"
import SingleNumber from "../components/SingleNumber"
import { useState } from "react"

const Profile = () => {
  const { id } = useParams()

  const [numberOfCards, setNumberOfCards] = useState(12)

  const {
    reset,
    handleSubmit,
    register,
    formState: { errors },
  } = useForm()
  const profileData = numbers.find((number) => number.id === +id)

  const onSubmit = (data) => {
    console.log(data)
    reset()
  }

  return (
    <main className="w-full" style={{ backgroundImage: `url(${bg})` }}>
      <Ad />
      <div className="max-w-6xl mx-auto px-4 md:px-0 mb-2 flex flex-col gap-4">
        {/* Title */}
        <h2 className="text-xl md:text-2xl font-semibold text-center py-2 bg-gray-100">
          {profileData?.name}
        </h2>
        <div className="flex flex-col md:flex-row items-center p-3 bg-gray-100 gap-2">
          <img src={img} alt="default girl" />
          <div className="w-full flex flex-col gap-2">
            <div className="flex py-2 px-4 bg-white items-center justify-between md:justify-start md:gap-8">
              <p className="">الاسم: سهام</p>
              <p className="">مراكش - المغرب</p>
              <p className="">العمر: 25</p>
            </div>
            <div className="flex py-2 px-4 bg-white items-center gap-8">
              <p className="">الحالة عازبة</p>
              <p className="">ترغب في الزواج</p>
            </div>
            <div className="flex py-2 px-4 bg-white items-center gap-8">
              <p className="">أبحث عن شخص:</p>
              <p className="">الاناقة, متفائل, زوج</p>
            </div>
            <button className="py-2 rounded-md text-white text-lg bg-teal-600 hover:bg-teal-700 transition">
              راسلني عبر واتساب
            </button>
            <button className="py-2 rounded-md text-white text-lg bg-sky-700 hover:bg-sky-800 transition">
              راسلني عبر الفيسبوك
            </button>
            <button className="py-2 rounded-md text-white text-lg bg-slate-800 hover:bg-slate-900 transition">
              أظهر رقم الهاتف
            </button>
          </div>
        </div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col gap-2 bg-gray-100 p-3"
        >
          <h3 className="text-xl font-semibold text-center">اترك رسالة</h3>
          <textarea
            name="content"
            placeholder="قم بكتابة محتوي الرسالة هنا"
            rows="5"
            className={`w-full border rounded-md p-2 outline-none resize-none ${
              errors.content ? "border-red-500" : ""
            }`}
            {...register("content", {
              required: { value: true, message: "هذا الحقل مطلوب" },
            })}
          />
          {errors.content && (
            <small className="text-red-500 text-xs">
              {errors.content.message}
            </small>
          )}
          <div className="flex flex-col md:flex-row gap-2 w-full">
            <div className="w-full">
              <input
                type="text"
                placeholder="اكتب اسمك هنا..."
                className={`w-full md:flex-1 border rounded-md p-2 outline-none ${
                  errors.name ? "border-red-500" : ""
                }`}
                {...register("name", {
                  required: { value: true, message: "هذا الحقل مطلوب" },
                })}
              />
              {errors.name && (
                <small className="text-red-500 text-xs">
                  {errors.name.message}
                </small>
              )}
            </div>
            <div className="w-full">
              <input
                type="text"
                placeholder="اكتب اميلك هنا..."
                className={`w-full md:flex-1 border rounded-md p-2 outline-none ${
                  errors.email ? "border-red-500" : ""
                }`}
                {...register("email", {
                  required: { value: true, message: "هذا الحقل مطلوب" },
                })}
              />
              {errors.email && (
                <small className="text-red-500 text-xs">
                  {errors.email.message}
                </small>
              )}
            </div>
            <div className="w-full">
              <input
                type="text"
                placeholder="اكتب رقم الهاتف هنا..."
                className={`w-full md:flex-1 border rounded-md p-2 outline-none ${
                  errors.phone ? "border-red-500" : ""
                }`}
                {...register("phone", {
                  required: { value: true, message: "هذا الحقل مطلوب" },
                })}
              />
              {errors.phone && (
                <small className="text-red-500 text-xs">
                  {errors.phone.message}
                </small>
              )}
            </div>
          </div>
          <button className="py-2 rounded-md text-white text-lg bg-teal-600 w-full md:w-fit md:px-8 md:self-start">
            إرسال
          </button>
        </form>
      </div>
      <Ad />
      <div className="max-w-6xl mx-auto px-4 md:px-0 mb-2 flex flex-col gap-4">
        <h2 className="text-xl md:text-2xl font-semibold text-center py-2 bg-[#f7f4f4]">
          المزيد من أرقام البنات
        </h2>
        <div className="w-full">
          <div className="mb-6 max-w-6xl mx-auto px-4 lg:px-0">
            <div className="flex flex-col justify-center p-1 flex-wrap lg:flex-row gap-1 border lg:border-none border-main">
              {numbers.slice(0, numberOfCards).map((item, i) => (
                <SingleNumber key={i} item={item} />
              ))}
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
        </div>
      </div>
    </main>
  )
}

export default Profile
