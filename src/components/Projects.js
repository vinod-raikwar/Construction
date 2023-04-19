import React from "react";
import Swiper from "react-slider-swiper";

const params = {
  pagination: ".swiper-pagination",
  paginationClickable: true,
  nextButton: ".swiper-button-next",
  prevButton: ".swiper-button-prev",
  spaceBetween: 30,

  // effect:"coverflow",
  // grabCursor: true,
  // centeredSlides: true,
  // slidesPerView: "auto",
  // coverflow:{
  //     rotate: 50,
  //     stretch: 0,
  //     depth: 100,
  //     modifier: 1,
  //     slideShadows: true
  // }
};
function Projects() {
  return (
    <>
      <Swiper {...params}>
        <div>Slide 1</div>
        <div>Slide 2</div>
        <div>Slide 3</div>
        <div>Slide 4</div>
        <div>Slide 5</div>
      </Swiper>
    </>
  );
}

export default Projects;
