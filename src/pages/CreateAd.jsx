import { Ad } from "../components"
import { useForm } from "react-hook-form"
import { countries, states } from "../data"

const CreateAd = () => {
  const {
    reset,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = (data) => {
    console.log(data)
    reset()
  }
  return (
    <div className="px-4">
      <Ad />
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="p-2 max-w-5xl mx-auto bg-[#f7f4f4] flex flex-col gap-4"
      >
        <p className="">
          <span className="text-red-500 font-medium">تنبيه:</span>
          عند إضافة بروفيلك فإنك توافق على منح الصلاحيات الكاملة لموقعنا في
          إظهاره للعامة وسيتم أرشفته من طرف محركات البحث…
        </p>
        <div className="flex flex-col md:items-start md:flex-row-reverse gap-4">
          <div className="flex flex-col gap-2 w-full">
            <div className="w-full flex flex-col gap-1">
              <label htmlFor="name">الاسم:</label>
              <input
                type="text"
                className={`border ${
                  errors.name ? "border-red-500" : ""
                } outline-none p-2 rounded-md`}
                placeholder="الاسم..."
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
            <div className="w-full flex gap-2 md:flex-row flex-col">
              <div className="flex flex-col w-full gap-1">
                <label htmlFor="country">الدولة:</label>
                <select
                  defaultValue="اختر دولة"
                  id="country"
                  className={`border ${
                    errors.country ? "border-red-500" : ""
                  } outline-none p-2 rounded-md`}
                  {...register("country", {
                    validate: (val) => {
                      if (val === "اختر دولة") {
                        return "هذا الحقل مطلوب"
                      }
                    },
                  })}
                >
                  <option value="اختر دولة" disabled>
                    اختر دولة
                  </option>
                  {countries.map((country) => (
                    <option value={country.name} key={country.id}>
                      {country.name}
                    </option>
                  ))}
                </select>
                {errors?.country && (
                  <small className="text-red-700 text-xs">
                    {errors.country.message}
                  </small>
                )}
              </div>
              <div className="w-full flex flex-col gap-1">
                <label htmlFor="city">المدينة:</label>
                <input
                  type="text"
                  className={`border ${
                    errors.city ? "border-red-500" : ""
                  } outline-none p-2 rounded-md`}
                  {...register("city", {
                    required: { value: true, message: "هذا الحقل مطلوب" },
                  })}
                  placeholder="المدينة..."
                />
                {errors.city && (
                  <small className="text-red-500 text-xs">
                    {errors.city.message}
                  </small>
                )}
              </div>
            </div>
            <div className="w-full flex gap-2 md:flex-row flex-col">
              <div className="w-full flex flex-col gap-1">
                <label htmlFor="age">العمر:</label>
                <input
                  type="number"
                  className={`border ${
                    errors.age ? "border-red-500" : ""
                  } outline-none p-2 rounded-md`}
                  {...register("age", {
                    required: { value: true, message: "هذا الحقل مطلوب" },
                  })}
                  placeholder="العمر"
                />
                {errors.age && (
                  <small className="text-red-500 text-xs">
                    {errors.age.message}
                  </small>
                )}
              </div>
              {/* <div className="w-full flex flex-col gap-1">
                <label htmlFor="gender">الجنس:</label>
                <input
                  type="text"
                  className={`border ${
                    errors.gender ? "border-red-500" : ""
                  } outline-none p-2 rounded-md`}
                  {...register("gender", {
                    required: { value: true, message: "هذا الحقل مطلوب" },
                  })}
                  placeholder="الجنس..."
                />
                {errors.gender && (
                  <small className="text-red-500 text-xs">
                    {errors.gender.message}
                  </small>
                )}
              </div> */}
              <div className="flex flex-col w-full gap-1">
                <label htmlFor="gender">الجنس:</label>
                <select
                  defaultValue="اختر الجنس"
                  id="gender"
                  className={`border ${
                    errors.state ? "border-red-500" : ""
                  } outline-none p-2 rounded-md`}
                  {...register("state", {
                    validate: (val) => {
                      if (val === "اختر الجنس") {
                        return "هذا الحقل مطلوب"
                      }
                    },
                  })}
                >
                  <option value="اختر الجنس" disabled>
                    اختر الجنس
                  </option>
                  <option value="ذكر">ذكر</option>
                  <option value="أنثي">أنثي</option>
                </select>
                {errors?.gender && (
                  <small className="text-red-700 text-xs">
                    {errors.gender.message}
                  </small>
                )}
              </div>
            </div>
            <div className="flex flex-col w-full gap-1">
              <label htmlFor="state">الحالة:</label>
              <select
                defaultValue="اختر الحالة"
                id="state"
                className={`border ${
                  errors.state ? "border-red-500" : ""
                } outline-none p-2 rounded-md`}
                {...register("state", {
                  validate: (val) => {
                    if (val === "اختر الحالة") {
                      return "هذا الحقل مطلوب"
                    }
                  },
                })}
              >
                <option value="اختر الحالة" disabled>
                  اختر الحالة
                </option>
                {states.map((stat) => (
                  <option value={stat.name} key={stat.id}>
                    {stat.name}
                  </option>
                ))}
              </select>
              {errors?.country && (
                <small className="text-red-700 text-xs">
                  {errors.country.message}
                </small>
              )}
            </div>
            <div className="w-full flex flex-col gap-1">
              <label htmlFor="want">رقم الهاتف:</label>
              <input
                type="text"
                className={`border ${
                  errors.phone ? "border-red-500" : ""
                } outline-none p-2 rounded-md`}
                {...register("phone", {
                  required: { value: true, message: "هذا الحقل مطلوب" },
                })}
                placeholder="رقم الهاتف..."
              />
              {errors.phone && (
                <small className="text-red-500 text-xs">
                  {errors.phone.message}
                </small>
              )}
            </div>
            <div className="w-full flex flex-col gap-1">
              <label htmlFor="desc">نبذه ووصف عنك؟</label>
              <textarea
                type="text"
                className={`border ${
                  errors.desc ? "border-red-500" : ""
                } outline-none p-2 rounded-md`}
                {...register("desc", {
                  required: { value: true, message: "هذا الحقل مطلوب" },
                })}
                rows="5"
                placeholder="قم بكتابة نبذه أو وصف بسيط عنك..."
              />
              {errors.desc && (
                <small className="text-red-500 text-xs">
                  {errors.desc.message}
                </small>
              )}
            </div>
          </div>

          <div className="flex items-center md:mt-10 justify-center w-full md:w-60">
            <label
              htmlFor="dropzone-file"
              className="flex flex-col items-center justify-center w-full h-32 md:h-44 md:p-2 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100"
            >
              <div className="flex flex-col items-center justify-center pt-5 pb-6">
                <svg
                  aria-hidden="true"
                  className="w-10 h-10 mb-3 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                  ></path>
                </svg>
                <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                  <span className="font-semibold">المرجو اختيار صورة</span> أو
                  وضع صورة بصيغة
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  SVG, PNG, JPG or GIF (MAX. 800x400px)
                </p>
              </div>
              <input id="dropzone-file" type="file" className="hidden" />
            </label>
          </div>
        </div>

        <button
          type="submit"
          className="py-2 rounded-md text-white text-lg bg-main w-full md:w-fit md:px-8 md:self-start"
        >
          إرسال
        </button>
      </form>
      <Ad />
    </div>
  )
}

export default CreateAd
