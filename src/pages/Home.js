import React from 'react';
import Banner from "../components/Banner.js";
import AboutBlog from "../components/AboutBlog.js";
import BlogPost from "../components/BlogPost.js";
// import Features from "../components/Features.js";
import Testimonial from "../components/Testimonial.js";
import Projects from '../components/Projects.js';
import Experience from '../components/Experience';
import Team from '../components/Team';

function Home() {
  return (
    <>
    <Banner/>
    <AboutBlog/>
    {/* <Features/> */}
    <Experience/>
    <Projects/>
    <BlogPost/>
    <Testimonial/>
    <Team/>
    </>
  )
}

export default Home;