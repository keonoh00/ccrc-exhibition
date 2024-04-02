import { AspectRatio, Image } from "@chakra-ui/react";
import { AssetSelector } from "../../assets";

export default function ImageContainer() {
  return (
    <AspectRatio maxW="400px" ratio={7 / 6}>
      <Image
        src={AssetSelector.systemModel}
        alt="systemmodel"
        objectFit="cover"
      />
    </AspectRatio>
  );
}
