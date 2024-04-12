import { Box, Text } from "@chakra-ui/react";

interface DemoScreenProps {}

const Demo: React.FC<DemoScreenProps> = () => {
  return (
    <Box flex={1} flexDirection={"row"}>
      <Text>demo</Text>
    </Box>
  );
};

export default Demo;
