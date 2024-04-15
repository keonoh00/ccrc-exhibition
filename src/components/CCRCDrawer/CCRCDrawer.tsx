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
import { useAppSelector } from "../../hooks/useAppDispatch";
import { VirtualPath } from "../../types/screens";

const HomeDrawerContent: React.FC = () => {
  return <DrawerBody></DrawerBody>;
};

const DemoDrawerContent: React.FC = () => {
  return <DrawerBody></DrawerBody>;
};

export default function CCRCDrawer() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { path } = useAppSelector((state) => state.virtualRouter);

  const btnRef = useRef();

  return (
    <>
      <HamburgerIcon
        marginLeft={10}
        w={10}
        h={10}
        ref={btnRef.current}
        onClick={onOpen}
      />
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

          {path === VirtualPath.HOME ? (
            <HomeDrawerContent />
          ) : (
            <DemoDrawerContent />
          )}

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
