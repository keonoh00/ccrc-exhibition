import { Text } from "@chakra-ui/react";
import { ScreenBaseProps } from "../types/screens";

interface NotFoundProps extends ScreenBaseProps {}

const NotFound: React.FC<NotFoundProps> = () => {
  return <Text>Not Found</Text>;
};

export default NotFound;
