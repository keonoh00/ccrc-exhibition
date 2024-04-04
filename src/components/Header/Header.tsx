import { Flex, Image } from "@chakra-ui/react";
import CCRCDrawer from "../CCRCDrawer/CCRCDrawer";
import { AssetSelector } from "../../assets";

export default function Header() {
  return (
    <Flex
      paddingBlock={6}
      paddingInline={28}
      justifyContent={"space-between"}
      alignItems={"center"}
      border={"1px solid"}
      borderColor={"gray.200"}
    >
      <Image
        src={AssetSelector.logo}
        alt="logo"
        aspectRatio={6 / 1}
        backgroundColor={"black"}
      />
      <CCRCDrawer />
    </Flex>
  );
}
