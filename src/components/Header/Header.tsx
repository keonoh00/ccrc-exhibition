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
        독립 항등분포 데이터에 대한 logit 보정을 통한 연합 학습
      </Heading>
      {/* Spacer equivalent size to hamburger icon */}
      <Box w={10} h={10} />
    </Flex>
  );
}
