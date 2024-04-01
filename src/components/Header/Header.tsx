import { Box, Flex, Heading } from "@chakra-ui/react";
import CCRCDrawer from "../CCRCDrawer/CCRCDrawer";

export default function Header() {
  return (
    <Flex
      paddingBlock={8}
      paddingInline={6}
      justifyContent={"space-between"}
      alignItems={"center"}
      backgroundColor={"gray.200"}
    >
      <CCRCDrawer />
      <Heading fontSize="2xl">
        연합학습 독립 항등분포 데이터를 위한 Logit 보정
      </Heading>
      {/* Spacer equivalent size to hamburger icon */}
      <Box w={10} h={10} />
    </Flex>
  );
}
