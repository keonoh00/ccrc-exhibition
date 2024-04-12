import {
  Box,
  Button,
  Image,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/react";
import React, { ReactElement, useEffect } from "react";
import Slider, { Settings as SlickSettings } from "react-slick";
import { SlidesSelector } from "../../assets";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const MAINSLIDE = [
  SlidesSelector.Slide1,
  SlidesSelector.Slide2,
  SlidesSelector.Slide3,
  SlidesSelector.Slide4,
  SlidesSelector.Slide5,
  SlidesSelector.Slide6,

  SlidesSelector.Slide10,
  SlidesSelector.Slide11,
  SlidesSelector.Slide12,
  SlidesSelector.Slide13,
  SlidesSelector.Slide14,
  SlidesSelector.Slide15,
  SlidesSelector.Slide16,
  SlidesSelector.Slide17,
  SlidesSelector.Slide18,
  SlidesSelector.Slide19,
  SlidesSelector.Slide20,
];

//////////////////////////////////////////////////
// Autoplay On Off
// Left Right Arrows Slide moving
// Hyperlink on Image
//////////////////////////////////////////////////

export default function CCRCCarousel() {
  const [isModalOpen, setIsModalOpen] = React.useState<boolean>(false);
  const [modalContent, setModalContent] = React.useState<ReactElement>(<></>);
  const slider = React.useRef<Slider>(null);

  const popUp = (index: number) => {
    if (index === 1) {
      setModalContent(<Image src={SlidesSelector.Slide7} />);
    } else if (index === 2) {
      setModalContent(<Image src={SlidesSelector.Slide8} />);
    } else {
      setModalContent(<Image src={SlidesSelector.Slide9} />);
    }
    setIsModalOpen(true);
  };

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
    autoplay: false,
    autoplaySpeed: 2000,
  };

  return (
    <>
      <div>
        <Slider ref={slider} {...settings}>
          {MAINSLIDE.map((image, index) =>
            index !== 5 ? (
              <div id={"slider" + index}>
                <Box
                  flex={1}
                  backgroundColor={"black"}
                  justifyContent={"center"}
                  alignItems={"center"}
                >
                  <Image marginLeft={"12%"} width={"76%"} src={image} />
                </Box>
              </div>
            ) : (
              <div id={"slider" + index}>
                <Box
                  flex={1}
                  backgroundColor={"black"}
                  justifyContent={"center"}
                  alignItems={"center"}
                >
                  <Button
                    style={{
                      position: "absolute",
                      top: "68%",
                      marginLeft: "17vw",
                      width: "21vw",
                      backgroundColor: "transparent",
                    }}
                    onClick={() => popUp(1)}
                  />
                  <Button
                    style={{
                      position: "absolute",
                      top: "74%",
                      marginLeft: "17vw",
                      width: "28vw",
                      backgroundColor: "transparent",
                    }}
                    onClick={() => popUp(2)}
                  />
                  <Button
                    style={{
                      position: "absolute",
                      top: "80.8%",
                      marginLeft: "17vw",
                      width: "29vw",
                      backgroundColor: "transparent",
                    }}
                    onClick={() => popUp(3)}
                  />

                  <Image marginLeft={"12%"} width={"76%"} src={image} />
                </Box>
                <Modal
                  isOpen={isModalOpen}
                  size={"7xl"}
                  isCentered={true}
                  onClose={() => setIsModalOpen((value) => !value)}
                >
                  <ModalOverlay />

                  <ModalContent maxW="70vw">
                    <ModalHeader />
                    <ModalCloseButton />
                    <ModalBody alignItems={"center"} justifyContent={"center"}>
                      {modalContent}
                    </ModalBody>
                  </ModalContent>
                </Modal>
              </div>
            )
          )}
        </Slider>
      </div>
    </>
  );
}
