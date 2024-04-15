import {
  Box,
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

interface ChangeImageParams {
  image: string | null;
}

interface ImageSelectorProps {
  type: ImageSelectorType;
  image: string | null;
  onChangeImage: (param: ChangeImageParams) => void;
  onReset: () => void;
}

enum ImageSelectorType {
  INPUT = "Input",
  NOISEDINPUT = "Input with Noise",
  NOISE = "Noise",
}

export enum AttackType {
  FGSM = "FGSM",
  PGD = "PGD",
  BIM = "BIM",
}

const AttackDisplayName = {
  [AttackType.FGSM]: "Fast Gradient Sign Method",
  [AttackType.PGD]: "Projected Gradient Descent",
  [AttackType.BIM]: "Basic Iter",
};

const ORIGINAL_IMAGES = {
  image0: require("../assets/Original/original_0.png"),
  image1: require("../assets/Original/original_1.png"),
  image2: require("../assets/Original/original_2.png"),
  image3: require("../assets/Original/original_3.png"),
  image4: require("../assets/Original/original_4.png"),
  image5: require("../assets/Original/original_5.png"),
  image6: require("../assets/Original/original_6.png"),
  image7: require("../assets/Original/original_7.png"),
  image8: require("../assets/Original/original_8.png"),
  image9: require("../assets/Original/original_9.png"),
};

const IMAGE_NOISE_MAP = {
  image0: {
    [AttackType.FGSM]: require("../assets/FGSM/noise_0.png"),
    [AttackType.PGD]: require("../assets/PGD/noise_0.png"),
    [AttackType.BIM]: require("../assets/BIM/noise_0.png"),
  },
  image1: {
    [AttackType.FGSM]: require("../assets/FGSM/noise_1.png"),
    [AttackType.PGD]: require("../assets/PGD/noise_1.png"),
    [AttackType.BIM]: require("../assets/BIM/noise_1.png"),
  },
  image2: {
    [AttackType.FGSM]: require("../assets/FGSM/noise_2.png"),
    [AttackType.PGD]: require("../assets/PGD/noise_2.png"),
    [AttackType.BIM]: require("../assets/BIM/noise_2.png"),
  },
  image3: {
    [AttackType.FGSM]: require("../assets/FGSM/noise_3.png"),
    [AttackType.PGD]: require("../assets/PGD/noise_3.png"),
    [AttackType.BIM]: require("../assets/BIM/noise_3.png"),
  },
  image4: {
    [AttackType.FGSM]: require("../assets/FGSM/noise_4.png"),
    [AttackType.PGD]: require("../assets/PGD/noise_4.png"),
    [AttackType.BIM]: require("../assets/BIM/noise_4.png"),
  },
  image5: {
    [AttackType.FGSM]: require("../assets/FGSM/noise_5.png"),
    [AttackType.PGD]: require("../assets/PGD/noise_5.png"),
    [AttackType.BIM]: require("../assets/BIM/noise_5.png"),
  },
  image6: {
    [AttackType.FGSM]: require("../assets/FGSM/noise_6.png"),
    [AttackType.PGD]: require("../assets/PGD/noise_6.png"),
    [AttackType.BIM]: require("../assets/BIM/noise_6.png"),
  },
  image7: {
    [AttackType.FGSM]: require("../assets/FGSM/noise_7.png"),
    [AttackType.PGD]: require("../assets/PGD/noise_7.png"),
    [AttackType.BIM]: require("../assets/BIM/noise_7.png"),
  },
  image8: {
    [AttackType.FGSM]: require("../assets/FGSM/noise_8.png"),
    [AttackType.PGD]: require("../assets/PGD/noise_8.png"),
    [AttackType.BIM]: require("../assets/BIM/noise_8.png"),
  },
  image9: {
    [AttackType.FGSM]: require("../assets/FGSM/noise_9.png"),
    [AttackType.PGD]: require("../assets/PGD/noise_9.png"),
    [AttackType.BIM]: require("../assets/BIM/noise_9.png"),
  },
};

const IMAGE_PERTURBED_MAP = {
  image0: {
    [AttackType.FGSM]: require("../assets/FGSM/perturbed_0.png"),
    [AttackType.PGD]: require("../assets/PGD/perturbed_0.png"),
    [AttackType.BIM]: require("../assets/BIM/perturbed_0.png"),
  },
  image1: {
    [AttackType.FGSM]: require("../assets/FGSM/perturbed_1.png"),
    [AttackType.PGD]: require("../assets/PGD/perturbed_1.png"),
    [AttackType.BIM]: require("../assets/BIM/perturbed_1.png"),
  },
  image2: {
    [AttackType.FGSM]: require("../assets/FGSM/perturbed_2.png"),
    [AttackType.PGD]: require("../assets/PGD/perturbed_2.png"),
    [AttackType.BIM]: require("../assets/BIM/perturbed_2.png"),
  },
  image3: {
    [AttackType.FGSM]: require("../assets/FGSM/perturbed_3.png"),
    [AttackType.PGD]: require("../assets/PGD/perturbed_3.png"),
    [AttackType.BIM]: require("../assets/BIM/perturbed_3.png"),
  },
  image4: {
    [AttackType.FGSM]: require("../assets/FGSM/perturbed_4.png"),
    [AttackType.PGD]: require("../assets/PGD/perturbed_4.png"),
    [AttackType.BIM]: require("../assets/BIM/perturbed_4.png"),
  },
  image5: {
    [AttackType.FGSM]: require("../assets/FGSM/perturbed_5.png"),
    [AttackType.PGD]: require("../assets/PGD/perturbed_5.png"),
    [AttackType.BIM]: require("../assets/BIM/perturbed_5.png"),
  },
  image6: {
    [AttackType.FGSM]: require("../assets/FGSM/perturbed_6.png"),
    [AttackType.PGD]: require("../assets/PGD/perturbed_6.png"),
    [AttackType.BIM]: require("../assets/BIM/perturbed_6.png"),
  },
  image7: {
    [AttackType.FGSM]: require("../assets/FGSM/perturbed_7.png"),
    [AttackType.PGD]: require("../assets/PGD/perturbed_7.png"),
    [AttackType.BIM]: require("../assets/BIM/perturbed_7.png"),
  },
  image8: {
    [AttackType.FGSM]: require("../assets/FGSM/perturbed_8.png"),
    [AttackType.PGD]: require("../assets/PGD/perturbed_8.png"),
    [AttackType.BIM]: require("../assets/BIM/perturbed_8.png"),
  },
  image9: {
    [AttackType.FGSM]: require("../assets/FGSM/perturbed_9.png"),
    [AttackType.PGD]: require("../assets/PGD/perturbed_9.png"),
    [AttackType.BIM]: require("../assets/BIM/perturbed_9.png"),
  },
};

type ImageKeyType = keyof typeof ORIGINAL_IMAGES;
type ImageNoiseMapKeyType = keyof typeof IMAGE_NOISE_MAP;
type ImagePerturbedMapKeyType = keyof typeof IMAGE_PERTURBED_MAP;
type ImageXMapInternalKeyType = keyof (typeof IMAGE_NOISE_MAP)["image0"];

const ImageSelector: React.FC<ImageSelectorProps> = ({
  type,
  image,
  onChangeImage,
  onReset,
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
            <CloseButton size={"lg"} alignSelf={"flex-end"} onClick={onReset} />
            <Image alignSelf={"center"} width={"40%"} src={image} />
          </Flex>
        ) : (
          <Text textAlign={"center"}>No Image Selected</Text>
        )}
      </Flex>

      <Flex minHeight={"100%"}>
        {type === ImageSelectorType.INPUT ? (
          <Popover isOpen={isOpen} onClose={onClose}>
            <PopoverTrigger>
              <Button
                colorScheme={"messenger"}
                onClick={onToggle}
                marginTop={3}
              >
                {type === ImageSelectorType.INPUT ? "Upload" : null}
              </Button>
            </PopoverTrigger>
            <PopoverContent boxSize={"lg"} height={"fit-content"}>
              <PopoverArrow />
              <PopoverCloseButton />
              <PopoverHeader>Select an image</PopoverHeader>
              <PopoverBody>
                {Object.keys(ORIGINAL_IMAGES).map((sampleImage, index) => (
                  <Button
                    key={index}
                    onClick={() => handleImageChange({ image: sampleImage })}
                    colorScheme={"whiteAlpaka"}
                    margin={2}
                    height={"fit-content"}
                    maxWidth={"28%"}
                  >
                    <Image
                      src={ORIGINAL_IMAGES[sampleImage as ImageKeyType]}
                      width={"100%"}
                    />
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

const Demo: React.FC<DemoScreenProps> = () => {
  const toast = useToast();
  const {
    isOpen: isResultModalOpen,
    onOpen: onResultModalOpen,
    onClose: onResultModalClose,
  } = useDisclosure();

  const [originalImage, setOriginalImage] = useState<string | null>(null);
  const [noiseImage, setNoiseImage] = useState<string | null>(null);
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

    if (noiseImage === null) {
      return { isValid: false, error: "Please select a noise image" };
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

  const isReadyForPrediction = () => {
    if (attackedImage === null) {
      return { isValid: false, error: "Please attack an image" };
    }

    return { isValid: true, error: null };
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

    const { isValid, error } = isReadyForPrediction();

    // Time sleep 1 sec
    setTimeout(() => {
      if (isValid) {
        setIsResultLoading(false);
        onResultModalOpen();
      } else {
        toast({
          title: "Failed to Show Result",
          description: error,
          status: "error",
          duration: 3000,
          isClosable: true,
        });
      }

      setIsResultLoading(false);
    }, 3000);
  };

  const handleDropdownSelect = (type: AttackType | string) => {
    setAttackType(type as AttackType);
    setNoiseImage(ORIGINAL_IMAGES[originalImage as ImageKeyType] || null);
  };

  return (
    <>
      <Flex
        direction={"row"}
        alignItems={"center"}
        justifyContent={"space-between"}
        marginTop={"3%"}
        marginBottom={"1%"}
      >
        <ImageSelector
          type={ImageSelectorType.INPUT}
          image={ORIGINAL_IMAGES[originalImage as ImageKeyType] || null}
          onChangeImage={({ image }) => setOriginalImage(image)}
          onReset={() => setOriginalImage(null)}
        />

        <ImageSelector
          type={ImageSelectorType.NOISE}
          image={
            originalImage !== null && attackType !== null && noiseImage !== null
              ? IMAGE_NOISE_MAP[originalImage as ImageNoiseMapKeyType][
                  attackType as ImageXMapInternalKeyType
                ]
              : null
          }
          onChangeImage={({ image }) => setNoiseImage(image)}
          onReset={() => setNoiseImage(null)}
        />

        <ImageSelector
          type={ImageSelectorType.NOISEDINPUT}
          image={
            originalImage !== null &&
            attackType !== null &&
            attackedImage !== null
              ? IMAGE_PERTURBED_MAP[originalImage as ImageNoiseMapKeyType][
                  attackType as ImageXMapInternalKeyType
                ]
              : null
          }
          onChangeImage={({ image }) => setAttackedImage(image)}
          onReset={() => setAttackedImage(null)}
        />
      </Flex>
      <Flex direction={"column"} flex={1} alignItems={"center"}>
        <Box width={"20%"}>
          <Select
            value={attackType || ""}
            placeholder="Select an attack type"
            onChange={(e) => {
              console.log("e.target.value", e.target.value);
              handleDropdownSelect(e.target.value);
            }}
          >
            {Object.keys(AttackType).map((attackType, index) => (
              <option key={index} value={attackType}>
                {AttackDisplayName[attackType as AttackType]}
              </option>
            ))}
          </Select>

          <AttackButton
            colorScheme={"red"}
            isLoading={isAttackInProgress}
            onClick={handleAttack}
          >
            Attack
          </AttackButton>

          <ShowResultButton
            colorScheme={"blue"}
            isLoading={isResultLoading}
            onClick={handleResultPress}
          >
            Show Result
          </ShowResultButton>
        </Box>
      </Flex>
      {originalImage && attackType && isResultModalOpen && (
        <IResultModal
          isOpen={isResultModalOpen}
          onClose={onResultModalClose}
          image={originalImage}
          attackType={attackType}
        />
      )}
    </>
  );
};

export default Demo;

const Container = chakra(Flex, {
  baseStyle: {
    flexDirection: "column",
    alignItems: "center",

    width: "30%",
    height: "40vh",

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
    width: "100%",
    marginTop: "3%",
  },
});

const ShowResultButton = chakra(Button, {
  baseStyle: {
    width: "100%",
    marginTop: "15%",
  },
});
