import CCRCCarousel from "../components/CCRCCarousel/CCRCCarousel";
import { Box } from "@chakra-ui/react";

interface HomeScreenProps {}

const Home: React.FC<HomeScreenProps> = () => {
  return (
    <Box flex={1} flexDirection={"row"}>
      <CCRCCarousel />
    </Box>
  );
};

export default Home;
