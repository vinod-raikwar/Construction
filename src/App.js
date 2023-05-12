import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TopHeader from "./components/TopHeader.js";
import NavBar from "./components/NavBar.js";
import Footer from "./components/Footer.js";
import Home from "./pages/Home.js";
import AboutUs from "./pages/AboutUs.js";
import Portfolio from "./pages/Portfolio.js";
import Blog from "./pages/Blog.js";
import Contact from "./pages/Contact.js";

import "animate.css";
import { useEffect,useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Joyride,{STATUS} from "react-joyride";

const state = {
  steps: [
    {
      target: ".top-header",
      content: "This is my awesome feature!",
      disableBeacon: true,
    },
    {
      target: ".logo-link",
      content: "This another awesome feature!",
      disableBeacon: true,
    },
    {
      target: ".company-service span",
      content: "This is my awesome feature!",
      disableBeacon: true,
    },
    {
      target: ".project ",
      content: "This another awesome feature!",
      disableBeacon: true,
    },
  ],
};

const { steps } = state;


function App() {
  useEffect(() => {
    AOS.init();
  }, []);
  const [tutorial2Passed,  setTutorial2Passed] = useState("");
  return (
    <>
      <BrowserRouter>
        < Joyride
          steps={steps}
          
          callback={({ status }) => {
            if (([STATUS.FINISHED, STATUS.SKIPPED]).includes(status)) {
              window.localStorage.setItem('tutorial2Passed', 'true');
              setTutorial2Passed(true);
            }
          }}
          styles={{
            options: {
              arrowColor: "#5caeab",
              backgroundColor: "#5caeab",
              overlayColor: "rgba(92, 174, 171, .3)",
              primaryColor: "#5caeab",
              textColor: "#fff",
            },
            spotlight: {
              backgroundColor: "transparent",
            },
          }}
          showProgress={true}
          showSkipButton={true}
          disableCloseOnEsc={false}
          disableOverlay={false}
          disableScrolling={false}
          disableScrollParentFix={false}
          run={true}
          scrollOffset={2}
          spotlightClicks={false}
          spotlightPadding={false}
          // stepIndex={2}
          // disableBeacon={true}
          // placement={"top"}
          // placementBeacon={"left"}
          continuous={true}
        />
        <TopHeader />
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
