import { HamburgerIcon } from "@chakra-ui/icons";
import {
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import { useRef } from "react";
import { VirtualPath } from "../../types/screens";
import { useAppDispatch } from "../../hooks/useAppDispatch";
import { routeTo } from "../../store/vitutalRouteStore";

export default function CCRCDrawer() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const dispatch = useAppDispatch();
  const onChangeRoute = (path: VirtualPath) => {
    dispatch(routeTo(path));
    onClose();
  };
  const btnRef = useRef();

  return (
    <>
      <HamburgerIcon w={10} h={10} ref={btnRef.current} onClick={onOpen} />
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef.current}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Overview</DrawerHeader>

          <DrawerBody>
            <Button onClick={() => onChangeRoute(VirtualPath.DEMO)}>
              demo
            </Button>
          </DrawerBody>

          <DrawerFooter>
            <Button onClick={onClose} colorScheme="blue">
              OK
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
}
