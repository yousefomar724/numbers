import { useParams } from "react-router-dom"
import { Ad, NumbersList } from "../components"
import { numbers } from "../data"
import img from "../img/img.jpg"

const Profile = () => {
  const { id } = useParams()
  const profileData = numbers.find((number) => number.id === +id)
  console.log(profileData)
  console.log(numbers)
  return (
    <div>
      <Ad />
      <div className="max-w-6xl mx-auto px-4 md:px-0 mb-2 flex flex-col gap-4">
        {/* Title */}
        <h2 className="text-xl md:text-2xl font-semibold text-center py-2 bg-[#f7f4f4]">
          {profileData?.name}
        </h2>
        <div className="flex flex-col md:flex-row items-center p-2 bg-[#f7f4f4] gap-2">
          <img src={img} alt="default girl" className="" />
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
        <div className="flex items-center flex-col gap-2 bg-[#f7f4f4] p-2">
          <h3 className="text-xl font-semibold text-center">اترك رسالة</h3>
          <textarea
            name="content"
            placeholder="قم بكتابة محتوي الرسالة هنا"
            rows="5"
            className="w-full border rounded-md p-2 outline-none resize-none"
          />
          <div className="flex flex-col md:flex-row gap-2 w-full">
            <input
              type="text"
              placeholder="اكتب اسمك هنا..."
              className="w-full md:flex-1 border rounded-md p-2 outline-none"
            />
            <input
              type="text"
              placeholder="اكتب اميلك هنا..."
              className="w-full md:flex-1 border rounded-md p-2 outline-none"
            />
            <input
              type="text"
              placeholder="اكتب رقم الهاتف هنا..."
              className="w-full md:flex-1 border rounded-md p-2 outline-none"
            />
          </div>
          <button className="py-2 rounded-md text-white text-lg bg-teal-600 w-full md:w-fit md:px-8 md:self-start">
            إرسال
          </button>
        </div>
      </div>
      <Ad />
      <div className="max-w-6xl mx-auto px-4 md:px-0 mb-2 flex flex-col gap-4">
        <h2 className="text-xl md:text-2xl font-semibold text-center py-2 bg-[#f7f4f4]">
          المزيد من أرقام البنات
        </h2>
        <div className="w-full">
          <NumbersList />
        </div>
      </div>
    </div>
  )
}

export default Profile
