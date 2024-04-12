import { useState } from "react";
import CCRCAccordion from "../components/CCRCAccordian/CCRCAccordion";
import CCRCCarousel from "../components/CCRCCarousel/CCRCCarousel";
import ImageContainer from "../components/ImageContainer/ImageContainer";
import { ScreenBaseProps } from "../types/screens";
import { Document, Page } from "react-pdf";
import { pdfjs } from "react-pdf";
import { Box } from "@chakra-ui/react";

interface HomeScreenProps extends ScreenBaseProps {}

const Home: React.FC<HomeScreenProps> = () => {
  const [numPages, setNumPages] = useState<number>();

  return (
    <Box flex={1} flexDirection={"row"}>
      <CCRCCarousel />
    </Box>
  );
};

export default Home;
