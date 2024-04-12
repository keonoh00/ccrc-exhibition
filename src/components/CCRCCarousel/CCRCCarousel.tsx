import { Image } from "@chakra-ui/react";
import React, { useEffect } from "react";
import Slider, { Settings as SlickSettings } from "react-slick";
import { SlidesSelector } from "../../assets";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const IMAGEARRAY = [
  SlidesSelector[1],
  SlidesSelector[2],
  SlidesSelector[3],
  SlidesSelector[4],
  SlidesSelector[5],
  SlidesSelector[6],
  SlidesSelector[7],
  SlidesSelector[8],
  SlidesSelector[9],
  SlidesSelector[10],
  SlidesSelector[11],
  SlidesSelector[12],
  SlidesSelector[13],
  SlidesSelector[14],
  SlidesSelector[15],
  SlidesSelector[16],
  SlidesSelector[17],
  SlidesSelector[18],
  SlidesSelector[19],
  SlidesSelector[20],
];

//////////////////////////////////////////////////
// Autoplay On Off
// Left Right Arrows Slide moving
// Hyperlink on Image
//////////////////////////////////////////////////

export default function CCRCCarousel() {
  const slider = React.useRef<Slider>(null);

  useEffect(() => {
    // Event listener for slide left and right
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") {
        const currentSlider = slider.current;
        currentSlider?.slickNext();
      } else if (e.key === "ArrowLeft") {
        const currentSlider = slider.current;
        currentSlider?.slickPrev();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const settings: SlickSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <div>
      <button onClick={() => slider?.current?.slickPrev()}>Prev</button>
      <button onClick={() => slider?.current?.slickNext()}>Next</button>
      <Slider ref={slider} {...settings}>
        {IMAGEARRAY.map((image, index) => (
          <div id={"slider" + index}>
            {/* <Button position={"absolute"}>Click Me</Button> */}
            <Image src={image} />
          </div>
        ))}
      </Slider>
    </div>
  );
}
