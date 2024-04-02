import CCRCAccordion from "../components/CCRCAccordian/CCRCAccordion";
import ImageContainer from "../components/ImageContainer/ImageContainer";
import { ScreenBaseProps } from "../types/screens";

interface HomeScreenProps extends ScreenBaseProps {}

const Home: React.FC<HomeScreenProps> = () => {
  return (
    <>
      <ImageContainer />
      <CCRCAccordion />
    </>
  );
};

export default Home;
