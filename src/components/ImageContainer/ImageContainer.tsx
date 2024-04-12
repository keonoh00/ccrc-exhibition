import { AspectRatio, Image } from "@chakra-ui/react";
import { AssetSelector } from "../../assets";

export default function ImageContainer({ src }: { src: typeof AssetSelector }) {
  return (
    <AspectRatio maxW="400px" ratio={7 / 6}>
      <Image src={src as unknown as string} />
    </AspectRatio>
  );
}
