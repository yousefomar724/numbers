import { useParams } from "react-router-dom"
import { numbers } from "../data"

const ProfilePage = () => {
  const { id } = useParams()
  const profileData = numbers.find((number) => number.id === id)
  console.log(profileData)
  return <div>ProfilePage</div>
}

export default ProfilePage
