import {
  CreateAdPage,
  Footer,
  Header,
  HomePage,
  ProfilePage,
} from "./components"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route element={<HomePage />} path="/" />
          <Route element={<CreateAdPage />} path="/create-ad" />
          <Route element={<ProfilePage />} path="/profile/:id" />
        </Routes>
        <Footer />
      </Router>
    </>
  )
}

export default App
