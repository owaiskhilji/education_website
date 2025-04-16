import { useEffect} from "react";
import './App.css'
import {Routes,Route,useLocation } from "react-router-dom";
import Home from "./Pages/Home"
import Contact from "./Pages/Contact"
import Aboutus from "./Pages/Aboutus"
import Notfound from "./Pages/Notfound"
import Allcourses from "./Pages/Allcourses"
import WhatsAppButton from "./Components/WhatsAppButton"
import Navbar from "./Components/Navbar"
import Footer from "./Components/Footer"

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}




function App() {
  
  return (
<div className="overflow-x-hidden">
<Navbar />
    <ScrollToTop/>
<Routes>
<Route path="/" element={<Home/>} />
<Route path="/about" element={< Aboutus/>} />
<Route path="/allcourses" element={< Allcourses/>} />
<Route path="/contact" element={< Contact/>} />
<Route path="/*" element={< Notfound/>} />
</Routes>
<WhatsAppButton/>
<Footer/>
</div>
  )
}

export default App
