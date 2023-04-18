import React from 'react';
import Banner from "../components/Banner.js";
import About from "../components/About.js";
import Blog from "../components/ArticleBlog.js";
import Features from "../components/Features.js";
import Testimonial from "../components/Testimonial.js";
import Counter from '../components/Counter';

function Home() {
  return (
    <>
    <Banner/>
    <About/>
    <Blog/>
    <Counter/>
    <Features/>
    <Testimonial/>
    </>
  )
}

export default Home;