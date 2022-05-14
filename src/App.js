import { BrowserRouter as Router, Route, Routes } from "react-router-dom"

import Home from "./components/Home"
import About from "./components/About"
import Navbar from "./components/Navbar"
import DisplayCharacter from "./components/DisplayCharacter"

function App() {
  return (
    <Router>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/characterdisplay/:gender" element={<DisplayCharacter />} />
        </Routes>
      </main>
    </Router>
  )
}
export default App
