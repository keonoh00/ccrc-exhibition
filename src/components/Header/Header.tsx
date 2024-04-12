import { Flex, Image } from "@chakra-ui/react";
import CCRCDrawer from "../CCRCDrawer/CCRCDrawer";
import { AssetSelector } from "../../assets";
import { useAppDispatch } from "../../hooks/useAppDispatch";
import { routeTo } from "../../store/vitutalRouteStore";
import { VirtualPath } from "../../types/screens";

export default function Header() {
  const dispatch = useAppDispatch();

  const backToHome = () => {
    dispatch(routeTo(VirtualPath.HOME));
  };
  return (
    <Flex
      paddingBlock={6}
      paddingInline={"5%"}
      justifyContent={"space-between"}
      alignItems={"center"}
      border={"1px solid"}
      borderColor={"gray.200"}
    >
      <Image
        src={AssetSelector.logo}
        alt="logo"
        aspectRatio={6 / 1}
        onClick={backToHome}
      />
      <CCRCDrawer />
    </Flex>
  );
}
