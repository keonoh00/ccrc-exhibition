import {
  Box,
  Button,
  Flex,
  Image,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Switch,
  Text,
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

  SlidesSelector.Slide18,
  SlidesSelector.Slide19,
  SlidesSelector.Slide20,
];

//////////////////////////////////////////////////
// Autoplay On Off
// Left Right Arrows Slide moving
// Hyperlink on Image
//////////////////////////////////////////////////

const Slide6Component = ({ index }: { index: number }) => {
  const [isModalOpen, setIsModalOpen] = React.useState<boolean>(false);
  const [modalContent, setModalContent] = React.useState<ReactElement>(<></>);

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

  return (
    <div id={"slider" + index}>
      <Box
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

        <Image marginLeft={"12%"} width={"75%"} src={SlidesSelector.Slide6} />
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
  );
};

const Slide10Component = ({ index }: { index: number }) => {
  const [isModalOpen, setIsModalOpen] = React.useState<boolean>(false);
  const [modalContent, setModalContent] = React.useState<ReactElement>(<></>);

  const popUp = (index: number) => {
    if (index === 1) {
      setModalContent(<Image src={SlidesSelector.Slide11} />);
    } else if (index === 2) {
      setModalContent(<Image src={SlidesSelector.Slide12} />);
    } else if (index === 3) {
      setModalContent(<Image src={SlidesSelector.Slide13} />);
    } else if (index === 4) {
      setModalContent(<Image src={SlidesSelector.Slide14} />);
    } else if (index === 5) {
      setModalContent(<Image src={SlidesSelector.Slide15} />);
    } else if (index === 6) {
      setModalContent(<Image src={SlidesSelector.Slide16} />);
    } else {
      setModalContent(<Image src={SlidesSelector.Slide17} />);
    }
    setIsModalOpen(true);
  };

  return (
    <div id={"slider" + index}>
      <Box
        backgroundColor={"black"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        {/* DATASET */}

        <Button
          style={{
            position: "absolute",
            top: "26%",
            marginLeft: "18vw",
            width: "12vh",
            backgroundColor: "transparent",
          }}
          onClick={() => popUp(1)}
        />
        <Button
          style={{
            position: "absolute",
            top: "26%",
            marginLeft: "25vw",
            width: "25vh",
            backgroundColor: "transparent",
          }}
          onClick={() => popUp(2)}
        />
        <Button
          style={{
            position: "absolute",
            top: "26%",
            marginLeft: "38vw",
            width: "16vh",
            backgroundColor: "transparent",
          }}
          onClick={() => popUp(3)}
        />

        {/* ATTACK */}

        <Button
          style={{
            position: "absolute",
            top: "65%",
            marginLeft: "18vw",
            width: "21vw",
            backgroundColor: "transparent",
          }}
          onClick={() => popUp(4)}
        />
        <Button
          style={{
            position: "absolute",
            top: "73%",
            marginLeft: "18vw",
            width: "28vw",
            backgroundColor: "transparent",
          }}
          onClick={() => popUp(5)}
        />
        <Button
          style={{
            position: "absolute",
            top: "81%",
            marginLeft: "18vw",
            width: "29vw",
            backgroundColor: "transparent",
          }}
          onClick={() => popUp(6)}
        />
        <Button
          style={{
            position: "absolute",
            top: "89%",
            marginLeft: "18vw",
            width: "29vw",
            backgroundColor: "transparent",
          }}
          onClick={() => popUp(7)}
        />

        <Image marginLeft={"12%"} width={"75%"} src={SlidesSelector.Slide10} />
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
  );
};

export default function CCRCCarousel() {
  const [isAutoPlay, setIsAutoPlay] = React.useState<boolean>(true);
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
    autoplaySpeed: 2000,
  };

  return (
    <>
      <div>
        <Slider ref={slider} autoplay={isAutoPlay} {...settings}>
          {MAINSLIDE.map((image, index) =>
            index === 5 ? (
              <React.Fragment key={index}>
                <Slide6Component index={index} />
              </React.Fragment>
            ) : index === 6 ? (
              <React.Fragment key={index}>
                <Slide10Component index={index} />
              </React.Fragment>
            ) : (
              <div key={"slider" + index}>
                <Box
                  backgroundColor={"black"}
                  justifyContent={"center"}
                  alignItems={"center"}
                >
                  <Image marginLeft={"12%"} width={"75%"} src={image} />
                </Box>
              </div>
            )
          )}
        </Slider>
        <Flex position={"absolute"} right={15}>
          <Text marginRight={15}>AutoPlay</Text>
          <Switch
            isChecked={isAutoPlay}
            onChange={(event) => {
              setIsAutoPlay(event.target.checked);
              slider.current?.slickPlay();
            }}
          />
        </Flex>
      </div>
    </>
  );
}
