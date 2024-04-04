import { Image } from "@chakra-ui/react";
import React from "react";
import Slider, { Settings as SlickSettings } from "react-slick";

export default function CCRCCarousel() {
  const settings: SlickSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    swipeToSlide: true,
    arrows: true,
  };
  return (
    <Slider {...settings}>
      <div>
        <Image src="https://via.placeholder.com/1920x1080" />
      </div>
      <div>
        <h1>2</h1>
        <Image src="https://via.placeholder.com/1920x1080" />
      </div>
      <div>
        <h1>3</h1>
      </div>
      <div>
        <h1>4</h1>
      </div>
      <div>
        <h1>5</h1>
      </div>
      <div>
        <h1>6</h1>
      </div>
    </Slider>
  );
}
