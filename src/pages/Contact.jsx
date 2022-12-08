import bg from "../img/bg.jpg"
import { useForm } from "react-hook-form"

const Contact = () => {
  const {
    reset,
    handleSubmit,
    register,
    formState: { errors },
  } = useForm()

  const onSubmit = (data) => {
    console.log(data)
    reset()
  }

  return (
    <main
      className="w-full py-10 md:py-16"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="max-w-4xl mx-auto px-4 flex flex-col gap-8">
        <h1 className="text-3xl md:text-4xl font-bold text-main">اتصل بنا</h1>
        <div className="p-4 bg-gray-100 shadow-md flex flex-col gap-6">
          <h3 className="text-lg md:text-xl text-center font-semibold text-gray-800">
            يمكنك التواصل معنا عبر الإيميل التالي : contact@7ob.win
          </h3>
          <h3 className="text-lg md:text-xl text-center font-semibold text-gray-800">
            و عبر الفورم أسفله:
          </h3>
          <form
            className="flex flex-col gap-4"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className="w-full flex flex-col gap-1">
              <label htmlFor="name" className="text-lg font-bold text-gray-800">
                الإسم الكامل:
              </label>
              <input
                type="text"
                id="name"
                placeholder="الإسم الكامل"
                className={`bg-white border ${
                  errors.name ? "border-red-500" : "border-gray-300"
                } rounded outline-none p-1.5`}
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
            <div className="w-full flex flex-col gap-1">
              <label
                htmlFor="email"
                className="text-lg font-bold text-gray-800"
              >
                عنوان البريد الإلكتروني:
              </label>
              <input
                type="email"
                id="email"
                placeholder="عنوان البريد الإلكتروني"
                className={`bg-white border ${
                  errors.email ? "border-red-500" : "border-gray-300"
                } rounded outline-none p-1.5`}
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
            <div className="w-full flex flex-col gap-1">
              <label
                htmlFor="title"
                className="text-lg font-bold text-gray-800"
              >
                عنوان الرسالة:
              </label>
              <input
                type="text"
                id="title"
                placeholder="عنوان الرسالة"
                className={`bg-white border ${
                  errors.title ? "border-red-500" : "border-gray-300"
                } rounded outline-none p-1.5`}
                {...register("title", {
                  required: { value: true, message: "هذا الحقل مطلوب" },
                })}
              />
              {errors.title && (
                <small className="text-red-500 text-xs">
                  {errors.title.message}
                </small>
              )}
            </div>
            <div className="w-full flex flex-col gap-1">
              <label
                htmlFor="message"
                className="text-lg font-bold text-gray-800"
              >
                محتوى الرسالة:
              </label>
              <textarea
                type="text"
                rows="6"
                id="message"
                className={`bg-white border ${
                  errors.message ? "border-red-500" : "border-gray-300"
                } rounded outline-none p-1.5`}
                {...register("message", {
                  required: { value: true, message: "هذا الحقل مطلوب" },
                })}
              />
              {errors.message && (
                <small className="text-red-500 text-xs">
                  {errors.message.message}
                </small>
              )}
            </div>
            <button
              type="submit"
              className="py-2 px-6 bg-main w-fit text-white rounded-md hover:-translate-y-1 transition"
            >
              إرسال
            </button>
          </form>
        </div>
      </div>
    </main>
  )
}

export default Contact
