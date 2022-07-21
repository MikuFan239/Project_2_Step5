// Reference: https://github.com/Ziratsu/slider-react
import React from "react";
import "./Carousel.css";
import leftArrow from "../Pictures/arrows/left-arrow.png";
import rightArrow from "../Pictures/arrows/right-arrow.png";

export default function BtnCarousel({ moveSlide,  direction}) {
  console.log(moveSlide, direction);
  return (
    <button
      onClick={moveSlide}
      className={direction === "next" ? "btn-slide next" : "btn-slide prev"}
    >
      <img src={direction === "next" ? rightArrow : leftArrow } alt="arrows" />
    </button>
  );
}