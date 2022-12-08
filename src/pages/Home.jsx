import { useState } from "react"
import { Search, Ad, NumbersList, Countries } from "../components/index"
import bg from "../img/bg.jpg"

const Home = () => {
  const [searchQuery, setSearchQuery] = useState("")
  return (
    <main className="w-full" style={{ backgroundImage: `url(${bg})` }}>
      <Search searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <Ad />
      <NumbersList searchQuery={searchQuery} home={true} />
      <Countries />
    </main>
  )
}

export default Home
