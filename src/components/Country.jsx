const Country = ({ country }) => {
  return (
    <div className="flex flex-col gap-2 items-center justify-center text-center">
      <img
        src={country.img}
        alt={country.name}
        className="w-28 h-16 object-cover object-center"
      />
      <span className="font-semibold text-sm">{country.name}</span>
    </div>
  )
}

export default Country
