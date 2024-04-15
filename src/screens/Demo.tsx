import {
  Button,
  chakra,
  CloseButton,
  Flex,
  Image,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverHeader,
  PopoverTrigger,
  Select,
  Text,
  useDisclosure,
  useToast,
} from "@chakra-ui/react";
import { useState } from "react";
import IResultModal from "../components/IResultModal/IResultModal";

interface DemoScreenProps {}

const Container = chakra(Flex, {
  baseStyle: {
    flexDirection: "column",
    alignItems: "center",

    width: "30%",
    minHeight: "40vh",

    marginInline: "5%",
    padding: "1%",

    borderRadius: "xl",
    borderWidth: 1,
    borderColor: "black",

    backgroundColor: "gray.100",
  },
});

const HeaderText = chakra(Text, {
  baseStyle: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
  },
});

const AttackButton = chakra(Button, {
  baseStyle: {
    width: "10%",
  },
});

interface ChangeImageParams {
  image: string | null;
}

interface ConfiguratorProps {
  type: ConfiguratorType;
  image: string | null;
  onChangeImage: (param: ChangeImageParams) => void;
}

enum ConfiguratorType {
  INPUT = "Input",
  OUTPUT = "Output",
}

const SAMPLE_IMAGES = [
  require("../assets/sampleImages/cifar10.png"),
  require("../assets/sampleImages/mnist.png"),
  require("../assets/sampleImages/fmnist.png"),
  require("../assets/sampleImages/cifar100.png"),
];

const Configurator: React.FC<ConfiguratorProps> = ({
  type,
  image,
  onChangeImage,
}) => {
  const { isOpen, onToggle, onClose } = useDisclosure();

  const handleImageChange = ({ image }: { image: string }) => {
    onChangeImage({ image });
    onClose();
  };

  return (
    <Container>
      <HeaderText>{type}</HeaderText>
      <Flex flex={1} width={"100%"} alignItems={"center"}>
        {image ? (
          <Flex flex={1} flexDirection={"column"}>
            <CloseButton
              size={"lg"}
              alignSelf={"flex-end"}
              onClick={() => onChangeImage({ image: null })}
            />
            <Image alignSelf={"center"} width={"40%"} src={image} />
          </Flex>
        ) : (
          <Text textAlign={"center"}>No Image Selected</Text>
        )}
      </Flex>

      <Flex minHeight={"100%"}>
        {type === ConfiguratorType.INPUT ? (
          <Popover isOpen={isOpen} onClose={onClose}>
            <PopoverTrigger>
              <Button
                colorScheme={"messenger"}
                onClick={onToggle}
                marginTop={3}
              >
                {type === ConfiguratorType.INPUT ? "Upload" : null}
              </Button>
            </PopoverTrigger>
            <PopoverContent>
              <PopoverArrow />
              <PopoverCloseButton />
              <PopoverHeader>Select an image</PopoverHeader>
              <PopoverBody>
                {SAMPLE_IMAGES.map((sampleImage, index) => (
                  <Button
                    key={index}
                    onClick={() => handleImageChange({ image: sampleImage })}
                    colorScheme={"whiteAlpaka"}
                    margin={2}
                    height={"fit-content"}
                  >
                    <Image src={sampleImage} width={"100%"} />
                  </Button>
                ))}
              </PopoverBody>
            </PopoverContent>
          </Popover>
        ) : null}
      </Flex>
    </Container>
  );
};

enum AttackType {
  FGSM = "Fast Gradient Sign Method",
  PGD = "Projected Gradient Descent",
  CW = "Carlini Wagner",
}

const Demo: React.FC<DemoScreenProps> = () => {
  const toast = useToast();
  const {
    isOpen: isResultModalOpen,
    onOpen: onResultModalOpen,
    onClose: onResultModalClose,
  } = useDisclosure();

  const [originalImage, setOriginalImage] = useState<string | null>(null);
  const [attackedImage, setAttackedImage] = useState<string | null>(null);

  const [attackType, setAttackType] = useState<AttackType | null>(null);

  const [isResultLoading, setIsResultLoading] = useState(false);
  const [isAttackInProgress, setIsAttackInProgress] = useState(false);

  const isInputValid = () => {
    if (originalImage === null) {
      return { isValid: false, error: "Please select an input image" };
    }

    if (attackType === null) {
      return { isValid: false, error: "Please select an attack type" };
    }

    return { isValid: true, error: null };
  };

  const handleAttack = () => {
    setIsAttackInProgress(true);

    const { isValid, error } = isInputValid();

    // Time sleep 1 sec
    setTimeout(() => {
      setIsAttackInProgress(false);

      if (isValid) {
        // TODO: Implement attack logic
        setAttackedImage(originalImage);

        toast({
          title: `${attackType}: Attack Successful`,
          description: "We've successfully attacked the image.",
          status: "success",
          duration: 3000,
          isClosable: true,
        });
      } else {
        toast({
          title: "Failed to Attack",
          description: error,
          status: "error",
          duration: 3000,
          isClosable: true,
        });
      }
    }, 1000);
  };

  const handleResultPress = () => {
    setIsResultLoading(true);
    toast({
      title: "Result Loading",
      description: "We are running the prediction.",
      status: "info",
      duration: 3000,
      isClosable: true,
    });

    // Time sleep 1 sec
    setTimeout(() => {
      setIsResultLoading(false);
      onResultModalOpen();
    }, 3000);
  };

  const handleDropdownSelect = (type: AttackType | string) => {
    // If the same attack type is selected, do nothing
    if (type === attackType) {
      return;
    }
    // If the attack type is not one of the AttackType enum, do nothing
    if (!Object.values(AttackType).includes(type as AttackType)) {
      return;
    }

    setAttackType(type as AttackType);
  };

  return (
    <>
      <Flex
        direction={"row"}
        alignItems={"center"}
        justifyContent={"space-between"}
        marginBlock={"5%"}
      >
        <Configurator
          type={ConfiguratorType.INPUT}
          image={originalImage}
          onChangeImage={({ image }) => setOriginalImage(image)}
        />

        <Flex direction={"column"} alignItems={"center"} width={"auto"}>
          <Select
            placeholder="Select an attack type"
            marginBottom={10}
            width={"100%"}
            onChange={(e) => handleDropdownSelect(e.target.value)}
          >
            {Object.values(AttackType).map((attackType, index) => (
              <option key={index} value={attackType}>
                {attackType}
              </option>
            ))}
          </Select>

          <AttackButton
            colorScheme={"red"}
            isLoading={isAttackInProgress}
            onClick={handleAttack}
            width={"90%"}
          >
            Attack
          </AttackButton>
        </Flex>

        <Configurator
          type={ConfiguratorType.OUTPUT}
          image={attackedImage}
          onChangeImage={({ image }) => setAttackedImage(image)}
        />
      </Flex>
      <Flex direction={"column"} alignItems={"center"}>
        <Button
          isLoading={isResultLoading}
          onClick={handleResultPress}
          colorScheme={"blue"}
        >
          Show Result
        </Button>
      </Flex>
      <IResultModal isOpen={isResultModalOpen} onClose={onResultModalClose} />
    </>
  );
};

export default Demo;
