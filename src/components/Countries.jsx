import { countries } from "../data"
import Country from "./Country"

const Countries = () => {
  return (
    <section className="max-w-6xl mx-auto border p-2 border-main mb-4 hidden md:flex md:flex-col md:mx-4">
      <h2 className="text-center mt-4 mb-8 text-2xl font-semibold">
        تصنيفات الموقع حسب الدول
      </h2>
      <div className="flex items-center justify-center flex-wrap gap-4">
        {countries.map((country) => (
          <Country country={country} key={country.id} />
        ))}
      </div>
    </section>
  )
}

export default Countries
