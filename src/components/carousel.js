import * as React from "react"
import "./component.css"

import Card from "./card.js"

import family from "../images/family.jpeg"
import ehealth from "../images/ehealth.png"
import ga from "../images/ga.png"
import aptlife from "../images/aptlife2.jpg"




const Carousel = () => {
    // useEffect (() => {
// Select all slides
// const slides = document.querySelectorAll(".slide");
// console.log(slides)

// loop through slides and set each slides translateX
// slides.forEach((slide, indx) => {
//   slide.style.transform = `translateX(${indx * 20}%)`;
// });

// select next slide button
// const nextSlide = document.querySelector(".btn-next");

// current slide counter
// let curSlide = 0;
// maximum number of slides
// let maxSlide = slides.length - 1;

// add event listener and navigation functionality
// nextSlide.addEventListener("click", function () {
  // check if current slide is the last and reset current slide
//   if (curSlide === maxSlide) {
//     curSlide = 0;
//   } else {
//     curSlide++;
//   }

  //   move slide by -100%
//   slides.forEach((slide, indx) => {
//     slide.style.transform = `translateX(${100 * (indx - curSlide)}%)`;
//   });
// });

// select next slide button
// const prevSlide = document.querySelector(".btn-prev");

// add event listener and navigation functionality
// prevSlide.addEventListener("click", function () {
  // check if current slide is the first and reset current slide to last
//   if (curSlide === 0) {
//     curSlide = maxSlide;
//   } else {
//     curSlide--;
//   }

  //   move slide by 100%
//   slides.forEach((slide, indx) => {
//     slide.style.transform = `translateX(${100 * (indx - curSlide)}%)`;
//   });
// });
    // },[])

    


    return (
        <div className="carousel">
        <div className="cardContainer">
           <Card className="slide blue-dark" title="Most important, my family" blurb="I live in Liberty Hill, TX with my wife, daughter, son, and our two dogs." img={family} alt="us" ></Card>
           <Card className="slide blue" title="My most recent role" blurb="At eHealth, I was part of the top of funnel team working to help make medicare accessible to those that need it." img={ehealth}></Card>
           <Card className="slide blue-lighter" title="Before that, Coding Academy" blurb="Software development was a passion of mine for a long time, so I left me job and attended a bootcamp." img={ga}></Card>
           <Card className="slide blue-light" title='Got started by giving back' blurb='I started my professional career with 6 years working in the non-profit sector.' img={aptlife}></Card>
        </div>
        </div>
    )
    }
export default Carousel

