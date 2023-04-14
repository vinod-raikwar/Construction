import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TopHeader from "./components/TopHeader.js";
import NavBar from "./components/NavBar.js";
import Footer from "./components/Footer.js";
import Home from "./pages/Home.js";
import AboutUs from "./pages/AboutUs.js";
import Portfolio from './pages/Portfolio';

function App() {
  return (
    <>
      <BrowserRouter>
        <TopHeader />
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/portfolio" element={<Portfolio />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
