import { Box, Button, chakra, Flex, Image } from "@chakra-ui/react";
import CCRCDrawer from "../CCRCDrawer/CCRCDrawer";
import { AssetSelector } from "../../assets";
import { useAppDispatch } from "../../hooks/useAppDispatch";
import { routeTo } from "../../store/vitutalRouteStore";
import { VirtualPath } from "../../types/screens";

const RouteButton = chakra(Button, {
  baseStyle: {
    color: "black",
    marginRight: "5px",
  },
});

export default function Header() {
  const dispatch = useAppDispatch();

  const pushToHome = () => {
    dispatch(routeTo(VirtualPath.HOME));
  };
  const pushToDemo = () => {
    dispatch(routeTo(VirtualPath.DEMO));
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
        onClick={pushToHome}
      />

      <Box>
        <RouteButton colorScheme={"whiteAlpaka"} onClick={pushToHome}>
          Home
        </RouteButton>
        <RouteButton colorScheme={"whiteAlpaka"} onClick={pushToDemo}>
          Demo
        </RouteButton>

        <CCRCDrawer />
      </Box>
    </Flex>
  );
}
