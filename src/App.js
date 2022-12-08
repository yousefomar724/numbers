import { Footer, Header } from "./components"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import CreateAd from "./pages/CreateAd"
import Profile from "./pages/Profile"
import PrivacyAndPolicy from "./pages/PrivacyAndPolicy"
import TermsAndConditions from "./pages/TermsAndConditions"
import Contact from "./pages/Contact"

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<CreateAd />} path="/create-ad" />
        <Route element={<Profile />} path="/profile/:id" />
        <Route element={<PrivacyAndPolicy />} path="/privacy-policy" />
        <Route element={<TermsAndConditions />} path="/terms-conditions" />
        <Route element={<Contact />} path="/contact" />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
