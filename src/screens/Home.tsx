import ImageContainer from "../components/ImageContainer/ImageContainer";
import { ScreenBaseProps } from "../types/screens";

interface HomeScreenProps extends ScreenBaseProps {}

const Home: React.FC<HomeScreenProps> = () => {
  return <ImageContainer />;
};

export default Home;
