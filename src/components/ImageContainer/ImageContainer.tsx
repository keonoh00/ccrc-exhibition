import { AspectRatio, Image } from "@chakra-ui/react";
import { AssetSelector } from "../../assets";

export default function ImageContainer() {
  return (
    <AspectRatio maxW="400px" ratio={4 / 3}>
      <Image src={AssetSelector.systemModel} alt="naruto" objectFit="cover" />
    </AspectRatio>
  );
}
