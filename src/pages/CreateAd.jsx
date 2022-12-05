import { Ad } from "../components"

const CreateAd = () => {
  return (
    <div className="px-4">
      <Ad />
      <div className="p-2 max-w-5xl mx-auto bg-[#f7f4f4] flex flex-col gap-4">
        <p className="">
          <span className="text-red-500 font-medium">تنبيه:</span>
          عند إضافة بروفيلك فإنك توافق على منح الصلاحيات الكاملة لموقعنا في
          إظهاره للعامة وسيتم أرشفته من طرف محركات البحث…
        </p>
        <div className="flex flex-col md:items-start md:flex-row-reverse gap-4">
          <div className="flex flex-col gap-2 w-full">
            <div className="w-full flex flex-col gap-1">
              <label htmlFor="name" className="">
                الاسم:
              </label>
              <input
                type="text"
                className="border outline-none p-2 rounded-md"
                placeholder="الاسم..."
              />
            </div>
            <div className="w-full flex gap-2 md:flex-row flex-col">
              <div className="w-full flex flex-col gap-1">
                <label htmlFor="country" className="">
                  الدولة:
                </label>
                <input
                  type="text"
                  className="border outline-none p-2 rounded-md"
                  placeholder="المغرب"
                />
              </div>
              <div className="w-full flex flex-col gap-1">
                <label htmlFor="city" className="">
                  المدينة:
                </label>
                <input
                  type="text"
                  className="border outline-none p-2 rounded-md"
                  placeholder="المدينة..."
                />
              </div>
            </div>
            <div className="w-full flex gap-2 md:flex-row flex-col">
              <div className="w-full flex flex-col gap-1">
                <label htmlFor="age" className="">
                  العمر:
                </label>
                <input
                  type="text"
                  className="border outline-none p-2 rounded-md"
                  placeholder="العمر"
                />
              </div>
              <div className="w-full flex flex-col gap-1">
                <label htmlFor="gender" className="">
                  الجنس:
                </label>
                <input
                  type="text"
                  className="border outline-none p-2 rounded-md"
                  placeholder="الجنس..."
                />
              </div>
            </div>
            <div className="w-full flex gap-2 md:flex-row flex-col">
              <div className="w-full flex flex-col gap-1">
                <label htmlFor="state" className="">
                  الحالة:
                </label>
                <input
                  type="text"
                  className="border outline-none p-2 rounded-md"
                  placeholder="عازب(ة)"
                />
              </div>
              <div className="w-full flex flex-col gap-1">
                <label htmlFor="want" className="">
                  أرغب في:
                </label>
                <input
                  type="text"
                  className="border outline-none p-2 rounded-md"
                  placeholder="الزواج"
                />
              </div>
            </div>
            <div className="w-full flex flex-col gap-1">
              <label htmlFor="want" className="">
                رقم الهاتف:
              </label>
              <input
                type="text"
                className="border outline-none p-2 rounded-md"
                placeholder="رقم الهاتف..."
              />
            </div>
            <div className="w-full flex flex-col gap-1">
              <label htmlFor="want" className="">
                نبذه ووصف عنك؟
              </label>
              <textarea
                type="text"
                className="border outline-none p-2 rounded-md resize-none"
                rows="3"
                placeholder="قم بكتابة نبذه أو وصف بسيط عنك..."
              />
            </div>
          </div>

          <div class="flex items-center md:mt-10 justify-center w-full md:w-60">
            <label
              for="dropzone-file"
              class="flex flex-col items-center justify-center w-full h-32 md:h-44 md:p-2 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100"
            >
              <div class="flex flex-col items-center justify-center pt-5 pb-6">
                <svg
                  aria-hidden="true"
                  class="w-10 h-10 mb-3 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                  ></path>
                </svg>
                <p class="mb-2 text-sm text-gray-500 dark:text-gray-400">
                  <span class="font-semibold">المرجو اختيار صورة</span> أو وضع
                  صورة بصيغة
                </p>
                <p class="text-xs text-gray-500 dark:text-gray-400">
                  SVG, PNG, JPG or GIF (MAX. 800x400px)
                </p>
              </div>
              <input id="dropzone-file" type="file" class="hidden" />
            </label>
          </div>
        </div>

        <button className="py-2 rounded-md text-white text-lg bg-main w-full md:w-fit md:px-8 md:self-start">
          إرسال
        </button>
      </div>
      <Ad />
    </div>
  )
}

export default CreateAd
