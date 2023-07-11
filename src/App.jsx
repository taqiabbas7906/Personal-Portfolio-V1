import {
  Route,
  Routes,
} from "react-router-dom";
import Home from "./Pages/Home/Home"
import AboutPage from "./Pages/About/AboutPage"
import PortfolioPage from "./Pages/Portfolio/PortfolioPage"
import ContactPage from "./Pages/Contact/ContactPage"
import NotFound from "./Pages/notfound/NotFound";


function App() {
  return(
  <Routes>
    <Route exact path='/' element={<Home/>}/>
    <Route exact path='/About' element={<AboutPage/>}/>
    <Route exact  path='/Portfolio' element={<PortfolioPage/>}/>
    <Route exact path='/Contact' element={<ContactPage/>}/>
    <Route exact path="*" element={<NotFound/>}/>
  </Routes>
  )
}

export default App
