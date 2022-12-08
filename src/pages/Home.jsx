import { useState } from "react"
import { Search, Ad, NumbersList, Countries } from "../components/index"

const Home = () => {
  const [searchQuery, setSearchQuery] = useState("")
  return (
    <>
      <Search searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <Ad />
      <NumbersList searchQuery={searchQuery} />
      <Countries />
    </>
  )
}

export default Home
