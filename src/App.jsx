import { Route, Routes } from "react-router-dom"
import Home from "./components/Home/Home"
import Footer from "./components/Shared/Footer"
import Nav from "./components/Shared/Nav"


function App() {

  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </>

  )
}

export default App
