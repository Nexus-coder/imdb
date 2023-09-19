import { useContext, useState } from "react"
import MovieWatchListContext from "./MovieWatchListContext"
import SearchParams from "./Components/SearchParams"
import ShowMoviePage from "./ScreenPages/ShowMoviePage"
import LandingPage from "./ScreenPages/LandingPage"
import { Routes, Route, BrowserRouter } from "react-router-dom"
import WatchList from "./ScreenPages/WatchList"
//Context is used to apply app data globally but you you should be keen on what component is consuming what
function App() {
  //Crreated new state
  const MovieAdded = useState([])
  return (
    <BrowserRouter>
    {/* Passed in the whole hook to the context provider */}
      <MovieWatchListContext.Provider value={MovieAdded} >
        <Routes>
          <Route path={"/details/:id"} element={<ShowMoviePage/>}/>
          <Route path={"/watchlist"} element={<WatchList />} />
          <Route path={"/"} element={<LandingPage />} />
        </Routes>
      </MovieWatchListContext.Provider>
    </BrowserRouter>

  )
}

export default App
