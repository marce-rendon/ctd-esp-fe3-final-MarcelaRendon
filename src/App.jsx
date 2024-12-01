
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Home from "./Routes/Home";
import Contact from "./Routes/Contact";
import Detail from "./Routes/Detail"
import Favs from "./Routes/Favs"
import {Routes, Route } from "react-router-dom";


function App() {
  return (
      <div className="App">
          <Navbar/>
          <Routes>
            <Route path= "/" element={<Home />} />
            <Route path= "/Contacto" element={<Contact />} />
            <Route path= "/dentist/:id" element={<Detail />} />
            <Route path= "/favoritos" element={<Favs />} />
            </Routes>
          <Footer/>
      </div>
  );
}

export default App;
