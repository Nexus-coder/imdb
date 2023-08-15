import SearchParams from "./Components/SearchParams"
import ShowMoviePage from "./ScreenPages/ShowMoviePage"
import LandingPage from "./ScreenPages/LandingPage"
import { Routes, Route, BrowserRouter } from "react-router-dom"
function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/details/:id"} element={<ShowMoviePage />} />
        <Route path={"/"} element={<LandingPage />} />
      </Routes>
    </BrowserRouter>

  )
}

export default App
