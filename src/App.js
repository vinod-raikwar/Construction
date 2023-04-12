import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TopHeader from "./components/TopHeader.js";
import NavBar from "./components/NavBar.js";
import Banner from "./components/Banner.js";
import About from "./components/About.js";
import Blog from "./components/Blog.js";
import Footer from "./components/Footer.js";

function App() {
  return (
    <>
      <BrowserRouter>
        <TopHeader />
        <NavBar />
        <Banner />
        <About />
        <Blog />
        <Routes>
          <Route></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
